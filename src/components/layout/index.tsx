import { Box } from "@mui/material";
import React from "react";
import HeaderComponent from "../header";
import Footer from "../footer";


const LayoutComponent = ({ children}:any) => {
  return (
    <Box className="d-flex overflowX-hidden">
      <Box className="vw-100 vh-100 overflowY-hidden overflowX-hidden ">
        <HeaderComponent />
        <Box className="my-2 bg-light-gray panel-height p-2 hide-scrollbar overflowY-scroll overflowX-hidden ps-4">
          {children}
        </Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default LayoutComponent;
