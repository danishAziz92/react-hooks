import React, { useEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const [open, setOpen] = useState(false);
  const button = useRef();
  const modal = useRef();

  useEffect(() => {
    if (button.current == null || modal.current == null) return
    const {bottom} = button.current.getBoundingClientRect();
    /* for (let index = 0; index < 10000; index++) {
        console.log('a');
    } */
    modal.current.style.top = `${bottom + 55}px`;
  }, [open]);

  return (
    <div>
      <button ref={button} onClick={() => setOpen(prev => !prev)}>
        Toggle modal
      </button>
      {open && (
        <div ref={modal} style={{position: 'absolute'}}>
          <span>Hello from the Modal</span>
        </div>
      )}
    </div>
  );
};

export default UseLayoutEffect;

/* 
This example was not reproducible
But useLayoutEffect runs synchronously, whereas useEffect runs asynchronously. Meaning suppose on 
a state update or first render, react will render the content and after the paint happens then it runs
the useEffect. So in cases where you need to run a side-effect where you mutate the DOM, if you use
useEffect only then paint will happen and then useEffect will mutate the DOM and then flicker effect 
can happen. So, in such cases use useLayoutEffect, which will first run and then hand over content to
paint to the browser. This is also useful for use-cases where one needs to synchronise some UI element
before rendering. This will be slower compared to useEffect because this will wait for code to finish
and then render
*/
