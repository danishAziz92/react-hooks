import { useEffect, useState } from "react";

const getFromLocalStorage = (key, initialVal) => {
  const value = JSON.parse(window?.localStorage.getItem(key));
  if (value) return value;

  if (initialVal instanceof Function) return initialVal();

  return initialVal;
};

const setInLocalStorage = (key, val) => {
  window?.localStorage.setItem(key, JSON.stringify(val));
};

export const useLocalStorage = (key, val) => {
  const [value, setValue] = useState(() => getFromLocalStorage(key, val));

  useEffect(() => {
    setInLocalStorage(key, value);
  }, [value]);

  return [value, setValue];
};