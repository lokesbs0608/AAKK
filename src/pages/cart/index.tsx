import React, { useEffect, useState } from "react";
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
import style from "./style.module.scss";

const Cart = () => {
  const { cartItems, removeItemFromCart }: any = useCart();
  const { TotalPrice }: any = useCart();
  const { user } = useUser();
  const [totalAmount, setTotalAmount] = useState(0);

  const router = useRouter();
  console.log(cartItems);
  const handelbuy = (path: any) => {
    router.push(path);
  };
  useEffect(() => {
    setTotalAmount(TotalPrice);
  }, [TotalPrice]);

  const handelCheckuot = (path: any) => {
    
      router.push(path);
   
  };

  return (
    <div className="flex gap-6 flex-wrap md:flex-nowrap ">
      <div
        className={`md:w-full ${style.Scroll_container}`}
        style={{ overflowY: "scroll", height: "75vh" }}
      >
        <div
          className={` mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center pl-12 `}
        >
          {cartItems.length === 0 && (
            <h1 className="text-center text-warn" style={{}}>
              {cartItems.length === 0 ? "No cart Items" : ""}
            </h1>
          )}

          {cartItems?.map((item: any) => {
            return (
              <div
                key={item.id}
                className="md:w-3/4 w-full  grid grid-cols-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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

      <div className="md:w-1/4 py-12 pl-12 md:py-0  justify-center items-center">
        <Typography gutterBottom sx={{ fontWeight: 700 }}>
          Order summary
        </Typography>
        <List disablePadding>
          <div
            className={style.Scroll_container}
            style={{ height: "450px", overflowY: "scroll" }}
          >
            {cartItems.map((product: any) => (
              <div className="flex justify-between items-start p-0.8 mt-6">
                <div>
                  <h2 className="font-bold">{product.title}</h2>

                  <p>
                    <span className="font-semibold">Color:</span>(
                    {product.selectedcolor})
                  </p>
                  <p>
                    <span className="font-semibold">Size:</span>(
                    {product.selectedSize})
                  </p>

                  <p>
                    <span className="font-semibold">Quantity: </span>
                    {product.quantity}
                  </p>
                </div>

                <div className="flex font-bold">
                  <p> &#8377;{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              &#8377; {totalAmount}
            </Typography>
          </ListItem>
          <button
            className="text-center w-full py-1 "
            onClick={() => handelCheckuot("/checkout")}
            style={{ backgroundColor: "#003366", color: "#fff" }}
          >
            CheckOut
          </button>
        </List>
      </div>
    </div>
  );
};

export default Cart;
