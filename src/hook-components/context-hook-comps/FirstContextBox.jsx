import React from 'react'

import { useTheme } from "../../hooks/UseThemeContext";
import ContextButton from './ContextButton'

const FirstContextBox = () => {
    const darkTheme = useTheme();

    const boxStyle = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'width': '200px',
        'height': '200px',
        'background': darkTheme ? 'black': 'white',
        'color': darkTheme ? 'white': 'black'
    }

  return (
    <div style={boxStyle}>
        FirstContextBox
        <ContextButton />
    </div>
  )
}

export default FirstContextBox