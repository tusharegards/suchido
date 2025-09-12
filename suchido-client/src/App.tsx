import { Outlet } from "react-router";
import "./App.css";
import ReactQueryProvider from "./provider/react-query-provider";

function App() {
  return (
    <>
      <ReactQueryProvider>
        <Outlet />
      </ReactQueryProvider>
    </>
  );
}

export default App;
