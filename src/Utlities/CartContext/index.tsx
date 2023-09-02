// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});

interface CartItem {
  id: string;
  
  // other properties...
}

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (item: any) => {
    setCartItems((prevItems): any => [...prevItems, item]);
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
