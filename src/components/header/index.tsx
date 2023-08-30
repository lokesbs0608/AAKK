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
import { Button, Hidden } from "@mui/material";
import { useUser } from "@/Utlities/UserContext";


export default function Header() {
  const { totalUniqueItems }: any = useCart();
  const [cartItemCount, setCartItemCount] = useState(totalUniqueItems);

  const { User }: any = useUser();
  // Update the cart item count when totalUniqueItems changes
  useEffect(() => {
    setCartItemCount(totalUniqueItems);
  }, [totalUniqueItems]);

  const router = useRouter();
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div onClick={() => handelRouter("/")}>
              A<sup>2</sup>K<sup>2</sup>
            </div>
          </Typography>
          {/* Cart Icon */}
          <IconButton
            color="inherit"
            onClick={() => handelRouter("/cart" )}
          >
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
                width: '50%', 
                '& .MuiDrawer-paper': {
                  width: '50%',
                },
              }}
               
            >
              <List >
                <ListItem button onClick={() => handleMenuItemClick("/blogs")}>
                  Blogs
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleMenuItemClick("/courses")}
                >
                  Courses
                </ListItem>
                <ListItem button onClick={() => handleMenuItemClick("/videos")}>
                  Videos
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleMenuItemClick("/aboutus")}
                >
                  About Us
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleMenuItemClick("/aboutus")}
                >
                  Account
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          {/* Menu Items for Desktop */}
          <Hidden mdDown>
            <div>
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
