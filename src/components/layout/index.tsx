import { Box } from "@mui/material";
import React from "react";
import HeaderComponent from "../header";
import Footer from "../footer";
import { useRouter } from "next/router";


const LayoutComponent = ({ children }: any) => {
  const router = useRouter();
  const hideHeaderOnPages = "./products";
  // Check if the current page's path is in the array of paths to hide the header
  const shouldHideHeader = hideHeaderOnPages.includes(router.pathname);

  return (
    <div className="flex overflow-x-hidden ">
      <div className="w-screen h-screen overflow-y-hidden overflow-x-hidden ">
        <div className="fixed top-0 left-0 w-full">
         <HeaderComponent />
        </div>
        <div className="my-12 px-12 py-12  h-[calc(100vh-64px)] p-2 scrollbar-hide  overflow-y-scroll overflow-x-hidden ">
          {children}
        </div>
        <div className="absolute  w-full">
          <Footer />
        </div>
        
      </div>
    </div>
  );
};

export default LayoutComponent;
