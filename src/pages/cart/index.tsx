import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useCart } from "../../Utlities/CartContext/index";
import { useUser } from "../../Utlities/UserContext";
import { useRouter } from "next/router";
import Delete from "@mui/icons-material/Delete";

const Cart = () => {
  const { cartItems, removeItemFromCart }: any = useCart();
  const { user } = useUser();

  const router = useRouter();
  console.log(cartItems);
  const handelbuy = (path: any) => {
    router.push(path);
  };
  return (
    <div className="flex gap-12">
      <div >
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center pl-12" style={{overflowY:"scroll",height:"78vh"}}>
          {cartItems.length === 0 && (
            <h1 className="text-center text-warn" style={{}}>
              {cartItems.length === 0 ? "No cart Items" : ""}
            </h1>
          )}

          {cartItems?.map((item: any) => {
            return (
              <div
                key={item.id}
                className="w-full grid grid-cols-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div>
                  <a href="#">
                    <img
                      className=" rounded-t-lg w-full "
                      style={{ height: "12rem" }}
                      src={item.images[0]}
                      alt="product image"
                    />
                  </a>
                </div>

                <div className="px-5 pb-5">
                  <a href="#">
                    <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                  </a>

                  <div className="flex items-center justify-between pt-8">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      $ {item.price}
                    </span>

                    <a
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{ backgroundColor: "#003366" }}
                    >
                      <Delete />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding >
          <div style={{height:"450px", overflowY:"scroll", }}>
          {cartItems.map((product: any) => (
            <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={product.title} secondary={product.title} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          </div>
          
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              $34.06
            </Typography>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Cart;
