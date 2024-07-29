import React from 'react'
import { useLocalStorage } from "../../hooks/UseLocalStorage";

const UseLocalStorageComp = () => {
    const [storedName, setStoredName] = useLocalStorage("name", () => "");

  return (
    <div>
        <h2>Use Local Storage Example</h2>
      <input
        value={storedName}
        onChange={(e) => setStoredName(e.target.value)}
      />
    </div>
  )
}

export default UseLocalStorageComp