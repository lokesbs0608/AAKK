import { Box } from "@mui/material";
import React from "react";
import HeaderComponent from "../header";
import Footer from "../footer";

const LayoutComponent = ({ children }: any) => {
  return (
    <div className="flex overflow-x-hidden">
      <div className="w-screen h-screen overflow-y-hidden overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full">
          <HeaderComponent />
        </div>
        <div className="my-12 px-12 py-12 bg-gray-200 h-[calc(100vh-64px)] p-2 hide-scrollbar overflow-y-scroll overflow-x-hidden ps-4">
          {children}
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
