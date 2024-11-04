import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="layoutContainer">
        <SideBar />
        <div className="p-4 sm:ml-64">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AppLayout;