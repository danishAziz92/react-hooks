/* eslint-disable react/prop-types */
import React, { useDeferredValue, useEffect, useMemo, useState } from 'react'

const UseDeferredValueHook = () => {
    const [input, setInput] = useState('');

  return (
    <div>
        <input value={input} onChange={ e => setInput(e.target.value)} />
        <List input={input} />
    </div>
  )
}

const List = ({ input }) => {
    console.log("Rendering list component");
    const deferredInput = useDeferredValue(input);

    const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < 20000; i++) {
            l.push(deferredInput);
        }
        return l;
    }, [deferredInput]);

    useEffect(() => {
        console.log(`input value: ${input}, deferred input val: ${deferredInput}`);
    },[input, deferredInput]);

    return (
        <div>
            {list.map((item, index)=> <div key={index}>{item}</div>)}
        </div>
    )
}

export default UseDeferredValueHook

/* - For a very similar use case as above. But this time if you’re receiving a value from a library or something where you cannot modify the code yourself to optimise the input coming in your component. You can use useDeferredValue hook. In this you can wrap a value inside this hook and it will return a deferred version of it. Now whenever any change that happens in that value, react will wait for it’s event loop to be empty meaning all high prio tasks are done, then only it will update this deferred value to it’s latest state and re-render it’s component. So the component will render every time the prop changes, but it will render the comp with the old value of the deferred value and thus avoiding running the slow function for each input update. Once event loop is empty, it will re-render the comp, but this time it will run the slow function and update the deferred value and render the comp with latest data */