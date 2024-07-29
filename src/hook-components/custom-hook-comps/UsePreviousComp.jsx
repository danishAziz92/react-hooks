import React, { useState } from 'react'
import { usePrevious } from '../../hooks/usePrevious';

const UsePreviousComp = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Dan');
    const prevCount = usePrevious(count);

  return (
    <div>
        <h2>Use previous Hook example</h2>
        count: {count} Prev Count: {prevCount}
        <button onClick={() => setCount(c=>c+1)}>Increment count</button>
        Name: {name}
        <button onClick={() => setName("Danny")}>Update Name</button>
    </div>
  )
}

export default UsePreviousComp