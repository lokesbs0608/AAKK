import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";



export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#003366" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">A<sup>2</sup>K<sup>2</sup></a>
          </Typography>
          <Button color="inherit"><a href="/blogs">blogs</a></Button>
          <Button color="inherit"><a href="/courses">Courses</a></Button>
          <Button color="inherit"><a href="/videos">Videos</a></Button>
          <Button color="inherit"><a href="/aboutus">aboutus</a></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
