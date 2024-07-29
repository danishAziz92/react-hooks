import React from 'react'
import FirstContextBox from './FirstContextBox'
import SecondContextBox from './SecondContextBox'
import { ThemeProvider } from "../../hooks/UseThemeContext";

const UseContextHook = () => {
    //Generally there should be 1 provider like this which imports and creates a nested structure of 
    //different contexts and then it will be imported and used in the App comp as everything will be
    //under App comp so, via context API we can safely create a global storage for state which are
    //to be used in multiple comps which are nested on multiple levels
  return (
    <ThemeProvider>
        <h1>UseContextHook</h1>
        <FirstContextBox />
        <SecondContextBox />
    </ThemeProvider>
  )
}

export default UseContextHook