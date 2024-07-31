import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Portal() {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
