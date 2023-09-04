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
 const [TotalPrice,setTotalPrice]=useState()

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

  // useEffect(() => {
  //   // Calculate the total price whenever cartItems changes
  //   const calculatedTotalPrice = cartItems.reduce(
  //     (total, item) => total + parseFloat(item.price),
  //     0
  //   );

  //   // Set the calculated total price to state
  //   setTotalPrice(calculatedTotalPrice);
  // }, [cartItems]);
  // console.log(calculatedTotalPrice)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        totalUniqueItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

