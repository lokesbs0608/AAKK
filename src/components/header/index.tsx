import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useCart } from "../../Utlities/CartContext/index";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  Button,
  Container,
  Divider,
  Hidden,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import { useUser } from "@/Utlities/UserContext";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Header() {
  const { totalUniqueItems }: any = useCart();
  const [cartItemCount, setCartItemCount] = useState(totalUniqueItems);

  const { User }: any = useUser();
  // Update the cart item count when totalUniqueItems changes
  useEffect(() => {
    setCartItemCount(totalUniqueItems);
  }, [totalUniqueItems]);

  const router = useRouter();
  const hidePath = "./";
  const hideSearch = hidePath.includes(router.pathname);

  const handelRouter = (path: string) => {
    router.push(path);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = (path: string) => {
    handelRouter(path);
    setMobileMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#003366" }} position="static">
        <Toolbar>
          <Typography
            className="flex "
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <div className="mr-auto" onClick={() => handelRouter("/")}>
              A<sup>2</sup>K<sup>2</sup>
            </div>
          </Typography>
          <div className="flex justify-center md:mr-24 ml-4  " style={{}}>
            {hideSearch && (
              <Paper
                className="  "
                component="form"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <InputBase sx={{ ml: 1 }} placeholder="Search " fullWidth />
                <IconButton type="button" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            )}
          </div>

          {/* Cart Icon */}
          <div></div>
          <IconButton color="inherit" onClick={() => handelRouter("/cart")}>
            <ShoppingCartIcon />
            {cartItemCount > 0 && <span>({cartItemCount})</span>}
          </IconButton>
          {/* Hamburger Icon for Mobile */}
          <Hidden lgUp>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
            {/* Drawer for Mobile Menu */}
            <Drawer
              anchor="right"
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              sx={{
                width: "50%",
                padding: "5px",
                "& .MuiDrawer-paper": {
                  width: "50%",
                  backgroundColor: "#0033",
                },
              }}
            >
              <List className="" sx={{ backgroundColor: "#0033" }}>
                <ListItem
                  button
                  onClick={() => handleMenuItemClick("/blogs")}
                  sx={{
                    backgroundColor: "#003366",
                    marginTop: "5px",
                    fontSize: "1rem", // Change the font size
                    color: "#fff",
                    border: "1px solid #333",
                    borderRadius: "4px",
                  }}
                >
                  Blogs
                </ListItem>
                <ListItem
                  button
                  sx={{
                    backgroundColor: "#003366",
                    marginTop: "5px",
                    fontSize: "1rem", // Change the font size
                    color: "#fff",
                    border: "1px solid #333",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleMenuItemClick("/courses")}
                >
                  Courses
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleMenuItemClick("/videos")}
                  sx={{
                    backgroundColor: "#003366",
                    marginTop: "5px",
                    fontSize: "1rem", // Change the font size
                    color: "#fff",
                    border: "1px solid #333",
                    borderRadius: "4px",
                  }}
                >
                  Videos
                </ListItem>
                <ListItem
                  button
                  sx={{
                    backgroundColor: "#003366",
                    marginTop: "5px",
                    fontSize: "1rem", // Change the font size
                    color: "#fff",
                    border: "1px solid #333",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleMenuItemClick("/aboutus")}
                >
                  About Us
                </ListItem>
                <ListItem
                  button
                  sx={{
                    backgroundColor: "#003366",
                    marginTop: "5px",
                    fontSize: "1rem", // Change the font size
                    color: "#fff",
                    border: "1px solid #333",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleMenuItemClick("/aboutus")}
                >
                  Account
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          {/* Menu Items for Desktop */}
          <Hidden lgDown>
            <div className="">
              <Button color="inherit" onClick={() => handelRouter("/blogs")}>
                Blogs
              </Button>
              <Button color="inherit" onClick={() => handelRouter("/courses")}>
                Courses
              </Button>
              <Button color="inherit" onClick={() => handelRouter("/videos")}>
                Videos
              </Button>
              <Button color="inherit" onClick={() => handelRouter("/aboutus")}>
                About Us
              </Button>
              <Button color="inherit" onClick={() => handelRouter("/aboutus")}>
                <Avatar
                  sx={{
                    backgroundColor: "white",
                    color: "#003366",
                    margin: "10px",
                  }}
                >
                  H
                </Avatar>
              </Button>
            </div>
          </Hidden>
          {/* Avatar */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
