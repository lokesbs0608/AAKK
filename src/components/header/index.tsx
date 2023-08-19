import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#003366" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">AAKK</a>
          </Typography>
          <Button color="inherit"><a href="/blogs">blogs</a></Button>
          <Button color="inherit"><a href="/courses">Courses</a></Button>
          <Button color="inherit">Videos</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
