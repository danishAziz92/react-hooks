import { useCallback, useRef, useState } from "react";

export function UseStateWithHistory(initialVal) {
  console.log("use history state hook rendering");
  const [state, setState] = useState(initialVal);
  const historyRef = useRef([initialVal]);
  const pointerRef = useRef(0);

  const setHistoryWithState = useCallback((val) => {
    setState((prevState) => {
      const newState = typeof val === "function" ? val(prevState) : val;
      console.log("new state", newState);
      if (historyRef.current[historyRef.current.length - 1] !== newState) {
        if(pointerRef.current === historyRef.current.length - 1) {
            historyRef.current = [...historyRef.current, newState];
        }
        else {
            historyRef.current = [...historyRef.current.slice(0,pointerRef.current + 1), newState];
        }
        pointerRef.current = historyRef.current.length - 1;
        console.log("history ref", historyRef.current);
      }
      return newState;
    });
  }, []);

  const movePointer = useCallback((space) => {
    if (space >= 0 && space <= historyRef.current.length - 1) {
      pointerRef.current = space;
      setState(historyRef.current[space]);
    }
  }, []);

  const back = useCallback(() => {
    console.log("back called");
    if (pointerRef.current - 1 >= 0) {
      movePointer(pointerRef.current - 1);
    }
  }, [movePointer]);

  const forward = useCallback(() => {
    if (pointerRef.current + 1 <= historyRef.current.length - 1) {
      movePointer(pointerRef.current + 1);
    }
  }, [movePointer]);

  return [
    state,
    setHistoryWithState,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      goto: movePointer
    },
  ];
}
