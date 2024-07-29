/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from "react";

const UseCallbackHook = () => {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);

  const getNumbers = useCallback((incrementor) => {
    return [number + incrementor, number + incrementor + 1, number + incrementor + 2];
  }, [number])

  const themeStyle = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
    width: "150px",
    height: "150px",
  };

  return (
    <div style={themeStyle}>
      <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getList={getNumbers} />
    </div>
  );
};

const List = ({ getList }) => {
    const [items, setItems] = useState([]);
    console.log("Child Component will re-render if parent re-renders irrespective of getList changed or not");

    useEffect(() => {
        console.log('useEffect ran for getList change');
        setItems(getList(10));
    }, [getList]);

    return(
        <>
            {items.map(item => <div key={item}>{item}</div>)}
        </>
    )
}

export default UseCallbackHook;

/* - While passing functions as a prop to a child comp. If that function depends on some argument and is not supposed to change on every render. And the child component needs to run some logic on the change of this function prop, then we should use useCallback(function,[function’s dependency]). It works as useMemo but for returning the callback function itself wrapped with its new dependency in a closure and not the callback function’s return value. In this way during a re-render of the parent, the child comp will only receive a new reference of that function prop when it actually has new arguments to run with, so in the child comp we can avoid running the logic dependent on this function prop, if the function prop didn’t change itself. We can also pass params to this function prop from the child component as well. This is very similar to the logic of referential equality that we see during use of useMemo */

