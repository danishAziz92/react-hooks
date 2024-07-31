import React from 'react'

const HeavyComponent = ({ title, onClick }) => {
    console.log("rendering heavy component");
  return (
    <>
        <div>HeavyComponent</div>
        <button onClick={onClick}>Heavy Button</button>
    </>
  )
}
const HeavyComponentMemoized = React.memo(HeavyComponent);
export default HeavyComponentMemoized