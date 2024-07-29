import React, { useMemo, useState, useEffect } from "react";

const slowFn = (n) => {
  console.log("slow function ran");
  return n * 2;
};

const UseMemoHook = () => {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);
  const themeStyle = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
    width: "150px",
    height: "150px",
  };

  const doubleNumber = useMemo(() => slowFn(number), [number]);

  const memoisedStylesObj = useMemo(() => {
    console.log("memo fn ran");
    return {
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      width: "150px",
      height: "150px",
    };
  }, [dark]);

  useEffect(() => {
    console.log(
      "This use effect runs only when then dark state changes, which in turn updates the memoised variable styles on which this useEffect depends on. If we didn't use useMemo and used normal obj/arr variable like themeStyles object and gave it as dependency, then it would run the effect on any re-render and not only when it's dependency truly updated"
    );
  }, [memoisedStylesObj]);

  return (
    <>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={memoisedStylesObj}>{doubleNumber}</div>
    </>
  );
};

export default UseMemoHook;

/* 
useMemo doesn’t really create a traditional cache with all the inputs it ran with, it just maintains the last value of the dependency and compares it with its current value. If they are not the same then it runs the functions passed to it and returns its value. Might look very similar to useEffect, but useEffect doesn’t return a value and neither maintains a state of a value across renders, useMemo is supposed to return a value and maintain it’s state across re-renders
    * Referential equality: Both useEffect and useMemo do shallow compare of dependencies by default. That means if an object is Initialised in the component and passed as a dependency. On every render, it will be a new object reference created and while comparing, both useEffect and useMemo will decide that the prev and current version of the dependency is different as they have different references(men location) even though they might have same content and run their callback functions. This is due to Js storing objects and array by reference. Eslint event throws a warning if you do something like this with useMemo, as aim of use memo is to avoid recalculating the function passed to it, but this will make it calculate it on every render. On useEffect it doesn’t show any such warning as it may be intended by dev
    * While setting dependency for a useMemo, the dependency can be of 2 types.
        * Primitive: use it in most of the cases as primitives are compared by value and will only trigger the useMemo only if the value has actually changed
        * Object/Array: In this case we need to be careful as they are compared using reference. Now if we are using an object created using useState, then we can use it normally, as after initial render it’s state can only be updated via it’s setter and that will create a new reference of that obj in the re-render which will trigger the useMemo rightly as the object actually got updated and not just because of a re-render causing re-initialization. But if we are using an object declared normally inside the component, we cannot do that as that will happen on every re-render and will re-trigger the useMemo as well. See below
        * We need to wrap that initialisation inside its own useMemo and provide an empty array as the dependency so that it gets initialised only during the first render of the component. Ex: const multiplier = useMemo(() => ({ value: 2 }), []);  
*/