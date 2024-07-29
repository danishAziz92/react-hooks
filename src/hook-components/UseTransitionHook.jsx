import React, { useState, useTransition } from "react";

const UseTransitionHook = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 10000;
  const handleInput = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
      />
      {isPending ? (
        <div>Loading ...</div>
      ) : (
        list.map((input, index) => <div key={index}>{input}</div>)
      )}
    </div>
  );
};

export default UseTransitionHook;


/* 
If there is some complex slow operation happening for some state upon some user action or state change. This can make the app slow, as in one user event cycle per se, React combines all the state changes that happened and performs them all at once and then re-renders the app as a means of avoiding multiple re-renders, but this can backfire if one of the operations between the multiple state updates is very slow, as react will have to record the state update actions, perform the slow logic, wait for it to finish, and then start with the actual state update and then re-render with latest data, which basically will block user-interaction/rendering in the page for that duration. We should use useTransition in such a case.
    - By default all state changes are high priority for React. But in cases like above, we need to prioritise the state which is directly associated with user-interaction, for example user seeing what they are typing in the input box immediately
    - So we use useTransition hook which returns [isPending, startTransition]. isPending is a boolean which tells us if the logic inside the startTransition function is pending or completed
    - startTransition is a function in which we should pass our low priority operation/state update, it says to react that this is low prio stuff, run it when all high prio work is done. What this will do is that, consider the state update outside it to be high priority and immediately update the state and re-render for it. Then it will wait for all such high priority things to complete and then run the logic inside the startTransition and then re-render again. This leads to more re-renders than normal but it will not let the slow code block the UI which is important 
*/