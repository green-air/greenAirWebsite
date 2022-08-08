import React from "react";
import {Outlet} from "react-router-dom";
import MyNavBar from "./MyNavBar.jsx";

const Layout = () => {
  return (
    <>
      <MyNavBar />
      <Outlet />
    </>
  );
};

export default Layout;