import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
  const [bool, setBool] = useState(true);
  const prevBool = useRef();
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  }
  console.log("before useEffect, prevBool=", prevBool.current);
  useEffect(() => {
    prevBool.current = bool;
    console.log("Inside and after useEffect, prevBool=", prevBool.current);
  }, [bool]);

  return (
    <div>
      UseRefHook
      <div>
        Current bool: {bool+""}
      </div>
      <button onClick={() => setBool(prevBool => !prevBool)}>Set Bool new state</button>
      <div>
        prev bool: {prevBool.current+""}
      </div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRefHook