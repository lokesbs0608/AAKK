// CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

interface CartItem {
  id: string;
  price:string
  // other properties...
}

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
 const [TotalPrice,setTotalPrice]=useState(0)

  const addItemToCart = (item: any) => {
    // const AlreadyExist= cartItems.some((cartItem)=>cartItem.id===item.id)
    // if(!AlreadyExist){

      setCartItems((prevItems): any => [...prevItems, item]);

      
    // }
  };

  const removeItemFromCart = (itemId: any) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item?.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalUniqueItems = () => {
    const uniqueItems = new Set(cartItems);
    return uniqueItems.size;
  };
 
 useEffect(()=>{
  let total=0;
  for(let i=0;i < cartItems.length; i++){
    const price = parseFloat(cartItems[i].price);
       total = total+price
       
  }
setTotalPrice(total)

 },[cartItems])
 

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        totalUniqueItems,
        TotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

