import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (callback, timeout) => {
  /*
    ***OLD CODE***
  const callbackRef = useRef(callback);
  const timeoutId = useRef();
  console.log("custom hook useTimeout rendering", timeoutId.current);

  useEffect(() => {
    timeoutId.current = setTimeout(callback, timeout);
    console.log("just after setting timeout, ID:", timeoutId.current);
  }, [callbackRef.current]);

  function clear() {
    console.log("clear called", timeoutId.current);
    clearTimeout(timeoutId.current);
    timeoutId.current = null;
  }

  function reset() {
    console.log("reset called", callback, timeout, timeoutId.current);
    clear();
    timeoutId.current = setTimeout(callback, timeout);
  }
  return { clear, reset }; 
*/
console.log('use timeout hook rendering');
  const callbackRef = useRef(callback);
  const timeoutIdRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutIdRef.current = setTimeout(callbackRef.current, timeout);
  }, [timeout]);

  const clear = useCallback(() => {
    clearTimeout(timeoutIdRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  useEffect(() => {
    set();
    return clear;
  }, [set, clear]);

  return { clear, reset };
};

/* Logic behind some crucial steps
basically we need to run some logic which is the setTimeout in our case when our custom hook is called. This logic generally will depend on the passed props to our custom hook. And we need to account for the case where one of these props might change. So we need some kind of useeffect or usecallback to run if one of these props change. So, that on re-render our custom hook is running logic(if it has to) with the latest data. Problem in our case though is, one of the argument is not a primitive and thus it will be passed by reference and compared by reference as well. And as useEffect or useCallback does shallow comparison, on re-renders of parent everytime as new reference will be passed and will lead to re-run of our effect or callback un-necessarily even if the body didn't change. And this can lead to performance issues. To overcome this we make a compromise and also a hack, the hack is: where we create a ref of this prop, so that if this prop is updated(which will be every render) our ref can also be updated, but updating this ref doesn't lead to a re-render of the custom hook itself. To make sure we have latest value of that prop, we run a useEffect dependent on that prop and update it's ref with the latest passed value. The compromise is: we don't use this prop as a dependency for the main logic of our component which doesn't need to re-run after every re-render of the parent, but still we will have the latest callback value if need be through the ref.

For the other prop, it is a JS primitive, so we can use it directly as a dependency for any effect or callback hook. Because it will only re-trigger the main logic if it's true content is changed/updated which is what should happen.


callbackRef is not given as a dependency because we have accounted for it's change via the useEffect which updates to it's latest value. And also that we can't at least for this use-case use the callback prop or it's ref.current as a dependency because it will lead to a re-render of the custom hook everytime 

timeoutId is stored in a ref to persist its value across renders without causing re-renders

clear is memoized using useCallback with an empty dependency array to ensure that the same function reference is used across re-renders, preventing unnecessary re-creations of the function.

set is memoized using useCallback with timeout as a dependency because the timeout duration might change. If timeout changes, the set function needs to be re-created to use the new duration value.

reset is memoized with set and clear as dependencies. While clear is created with an empty dependency array and does not change, it is included in reset's dependencies for completeness and consistency in ensuring the correct function references are used.

there is bug in your code, in which if we pass a new callback function(with a different function body), but the same delay. the setTimeout will not fire, because we are only updating the set function if only the delay is updated. This is the compromise for performance
*/
