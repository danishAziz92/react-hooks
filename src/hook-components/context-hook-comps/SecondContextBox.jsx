import React from 'react'

import { useTheme } from "../../hooks/UseThemeContext";
import ContextButton from './ContextButton'

const SecondContextBox = () => {
    const darkTheme = useTheme();

    const boxStyle = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'width': '200px',
        'height': '200px',
        'background': darkTheme ? 'black': 'white',
        'color': darkTheme ? 'white': 'black',
        'marginTop': '20px'
    }

  return (
    <div style={boxStyle}>
        SecondContextBox
        <ContextButton />
    </div>
  )
}

export default SecondContextBox