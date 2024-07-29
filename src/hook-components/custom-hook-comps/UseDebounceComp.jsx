import React, { useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce';

const UseDebounceComp = () => {
    console.log('use debounce comp rendering');
    const [count, setCount] = useState(10);
    useDebounce(() => {alert(count)}, 1000, [count]);

  return (
    <div>
        <h2>Use Debounce Example</h2>
        <div>{count}</div>
        <button onClick={() => {setCount(prev => prev + 1)}}>Increment</button>
    </div>
  )
}

export default UseDebounceComp