import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="md:flex md:justify-center md:ml-16">
      <div className="">
        <Sidebar />
      </div>
      <Outlet />
      {/* <MainContainer /> */}
    </div>
  );
};

export default Body;
