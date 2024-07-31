import React, { useCallback, useEffect, useRef, useState } from 'react'
import HeavyComponentMemoized from './HeavyComponent'

const Container = () => {0
    const [name, setName] = useState('');
    const handleClickRef = useRef();

    useEffect(() => {
        handleClickRef.current = () => {
            console.log("click clicked, name:", name);
        }
    }, [name])

    /* handleClickRef.current = useCallback(() => {
        console.log("click clicked, name:", name);
    }, [name]); */

    const handleClick = useCallback(() => {
        handleClickRef.current();
    }, []);

  return (
    <>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <HeavyComponentMemoized title="some value" onClick={handleClick} />
    </>
  )
}

export default Container

/* 
Here we need to avoid re-rendering the heavy component everytime our parent comp re-renders.
We cannot simply use React.Memo to do this as one of it's props is a non-primitive which is the
handleClick function. It will be passed new everytime and Memo would not work properly. Using a 
comparison fn in the memo will produce a stale closure problem. To overcome this issue, we need
to provide a stable version of the prop, but make sure that the function in the prop is not having
a stale closure, but latest state value.
Steps::
1: Create a stable reference: use useCallback with [] dependency, this will create the function only
once(onMOunt) and only that reference will be compared by the Memo, which will avoid the re-render of
the heavy component everytime our parent comp re-renders
2: Now this stable function needs to perform the action we wanted, but with latest value. Basically it
needs to call a function which has the latest state in it's closure
3: To store such a function and persist across re-renders but not re-render the comp on it's update.
We need to create a Ref
4: Now we need to update this ref with the original function we intended with latest closure. To do
this, we can use any dependency tracking hook like useEffect or useCallback. Which need to track the
"name" state in our example and update the ref.current directly or return our function as a callback
to the ref.current based on what hook we are using. Both examples are shared above

Concepts::
** Now how we are making sure we have latest closure by creating the function again and again when our
relevant state updates.
** We couldn't pass the ref(same reference always) as the prop, because we need to pass ref.current which
has the actual function we need to invoke from the child heavy comp. And if we pass ref.current, it will
again have a new value on each state update
** That' why we create the handleClick fn. which doesn't depend on any state but on the stable ref.
Refs are always stable as react maintains the same object throughout the comp's lifecycle, so we don't 
need to pass it as a reference to the useCallback of handleClick
** When we're accessing the ref.current inside the useEffect's callback(creating a function definition), 
we create a closure over the ref object. Closures create shallow copy of objects, so the object reference
is fixed in time and space. But the properties of objects are still open for mutation, just like with 
const objects. So we update the object property and call that object property inside the handleClick's
stable reference

So this is how we use, an object(ref), closure's understanding, dependency hook and Memo to create
stable non-primitive props, so that we can reduce re-renders of heavy components

*/