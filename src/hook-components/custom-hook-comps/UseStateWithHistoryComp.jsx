import React, { useState } from "react";
import { UseStateWithHistory } from "../../hooks/useStateWithHistory";

const UseStateWithHistoryComp = () => {
    console.log("use history state comp rendering");
  const [count, setCount, { history, pointer, back, forward, goto }] = UseStateWithHistory(1);
  const [name, setName] = useState("Dan");
  return (
    <div>
      <h2>Use State with History Example</h2>
      <div>Count: {count}</div>
      <div>History: {history?.join(",")}</div>
      <div>Pointer: {pointer}</div>
      <div>
      <button onClick={() => setCount((c) => c * 2)}>Double</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => back()}>Back</button>
      <button onClick={() => forward()}>Forward</button>
      <button onClick={() => goto(2)}>Go to Index 2</button>
      </div>
      Name: {name}
      <button onClick={() => setName("Danny")}>Update name</button>
    </div>
  );
};

export default UseStateWithHistoryComp;
