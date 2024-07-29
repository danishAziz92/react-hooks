import React from 'react'

import { useThemeUpdate } from "../../hooks/UseThemeContext";

const ContextButton = () => {
    const toggleTheme = useThemeUpdate();

  return (
    <button onClick={toggleTheme}>Toggle Theme via context</button>
  )
}

export default ContextButton