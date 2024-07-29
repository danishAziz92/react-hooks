import { useRef } from "react";

export function usePrevious(value) {
    const currentValueRef = useRef(value);
    const prevValueRef = useRef();

    if(currentValueRef.current !== value){
        prevValueRef.current = currentValueRef.current;
        currentValueRef.current = value;
    }
    return prevValueRef.current;
}