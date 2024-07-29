import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div
        style={{
          display: "flex",
          justifyContent: "safe center",
          flexDirection: "column",
          alignItems: "center",
          width: '75%',
          height: '100vh',
          maxHeight: '100vh',
          overflowY: 'scroll'
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
