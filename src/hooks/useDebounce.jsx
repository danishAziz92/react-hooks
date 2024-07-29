import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

export const useDebounce = (callback, delay, dependencies) => {
  console.log("use debounce hook rendering");
  const { clear, reset } = useTimeout(callback, delay);
  useEffect(() => {
    reset();
  }, [...dependencies, reset]);

  useEffect(() => {
    clear();
  }, []);
};
