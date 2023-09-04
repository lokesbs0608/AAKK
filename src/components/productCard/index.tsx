import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import { useCart } from "../../Utlities/CartContext/index";
import { useUser } from "@/Utlities/UserContext";
import router, { useRouter } from "next/router";
import Selection from '../Selection/index'
import {
  
  Container,
  Hidden,
  InputAdornment,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Products from '../../pages/products/[id]'
import { json } from "stream/consumers";


export default function ImgMediaCard(props: any) {

  const { addItemToCart, cartItems }: any = useCart();
  const { user }: any = useUser();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Message = "Message from website";
  const handleWhatsApp = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=919003273189&text=${Message}`;
  };

  // const handelAddToCart = (item: any,event:any) => {
  //   event.stopPropagation();

  //   const AleadyExist= cartItems.some((CartItem:any)=>CartItem.id===item.id)
  //   if(!AleadyExist){

  //     addItemToCart(item);
  //   }else{
  //     alert('Item Already in Your Cart')
  //   }
      

    
  // };

  // const handelBuyNow = (path: any,event:any) => {
  //   event.stopPropagation();
  //   router.push(path);
  // };

  const handelProductNavigation=(event:any,item:any)=>{
  console.log(item)
   router.push(`/products/${item.id}?data=${encodeURIComponent(JSON.stringify(item))}`)
  }
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="mx-auto pl-4 md:p-0 " style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
        {props.data?.map((item: any) => {
          return (
            <div
              key={item.id}
              onClick={(e)=>handelProductNavigation(e,item)}
              className=" flex col-4  grid grid-cols-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
             
                <img
                  className="p-0 rounded-t-lg w-full "
                  style={{ height: "12rem" }}
                  src={item.images[0]}
                  alt="product image"
                />
              
              <div className="px-5 pb-2">
                <a href="#" >
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-16" style={{overflow:"hidden"}}>
                    {item.title}
                  </h5>
                </a>
                <div className="flex items-center mt-12 md:mt-2.5 pb-1">
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    4.0
                  </span>
                </div>
                <div className="flex  items-ceneter justify-end  m-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  &#8377; {item.price}
                  </span>
                  {/* <a
                    onClick={(e) => handelBuyNow(`${user ? "/checkout" : "/signin"}`,e)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Buy Now
                  </a>
                  <a
                    onClick={(e) => handelAddToCart(item,e)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to Cart
                  </a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
