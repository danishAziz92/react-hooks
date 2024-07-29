import React, { useState, useEffect } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const substractByTwo = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  /* useEffect(() => {
    // *********************** IMPORTANT ************************** 
    //If we just did setCount(count+1); the callback of the setInterval will only close over the
    //current value of count which is 0 and will always run with that value. We pass the functional
    //updater version instead. React makes sure that this updater whenever run, it will receive the
    //reference to the global state/value(of that component) which react is maintaining for that state
    //So whenever this callback runs, it will fetch the latest value of that count state and add on
    //of it
    const interval = setInterval(() => {
      console.log("setting count", count);
      setCount(c => c + 1);
    }, 1000);
    return () => {
      console.log("clearing interval", interval);
      clearInterval(interval);
    };
  }, []); */

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <div>
        <button onClick={substractByTwo}>Set minus state back to back</button>
      </div>
    </div>
  );
};

export default UseStateHook;

//Pass a function so that it receives the prevValue in the current lifecycle of the component,
//which will be the same as the latest value of the state variable. Else if we just do direct state
//setting, it will consider the value of state var which was set when the component was last rendered
//because state is set asynchronously in React
