import React, { useState } from "react";
import { useTimeout } from "../../hooks/useTimeout";

const UseTimeoutComp = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 2000);

  return (
    <div>
      <h2>Use Timeout Example</h2>
      <div>{count}</div>
      <br />
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
};

export default UseTimeoutComp;
