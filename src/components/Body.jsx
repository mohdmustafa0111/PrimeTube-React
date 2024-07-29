import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex mt-16 h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default Body;
