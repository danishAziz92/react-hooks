import React from 'react'
import { Link } from "react-router-dom";

const sidebarContainerStyles = {
    float: 'left',
    height: '100vh',
    width: '25%',
    borderRight: '1px solid white',
    boxShadow: '-3px 0 5px 0 #555'
};

const Sidebar = () => {
  return (
    <div style={sidebarContainerStyles}>
        <h3>Hooks examples</h3>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/useState">Use State</Link>
        </div>
        <div>
            <Link to="/useEffect">Use Effect</Link>
        </div>
        <div>
            <Link to="/useContext">Use Context</Link>
        </div>
        <div>
            <Link to="/useRef">Use Ref</Link>
        </div>
        <div>
            <Link to="/useMemo">Use Memo</Link>
        </div>
        <div>
            <Link to="/useCallback">Use Callback</Link>
        </div>
        <div>
            <Link to="/useReducer">Use Reducer</Link>
        </div>
        <div>
            <Link to="/useTransition">Use Transition</Link>
        </div>
        <div>
            <Link to="/useDeferredValue">Use Deferred Value</Link>
        </div>
        <div>
            <Link to="/useLayoutEffect">Use Layout effect</Link>
        </div>
        <div>
            <Link to="/custom/local-storage">Use Custom Local Storage</Link>
        </div>
    </div>
  )
}

export default Sidebar