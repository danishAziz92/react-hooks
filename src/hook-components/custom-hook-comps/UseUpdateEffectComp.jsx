import React, { useState } from 'react'
import { useUpdateEffect } from '../../hooks/useUpdateEffect';

const UseUpdateEffectComp = () => {
    const [count, setCount] = useState(15);
    useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
        <h2>Use Update effect Example</h2>
        {count}
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

export default UseUpdateEffectComp