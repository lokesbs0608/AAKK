// CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

interface CartItem {
  id: string;
  price: string;
  Finalprice: number;
  quantity: number;
  // other properties...
}

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [TotalPrice, setTotalPrice] = useState(0);

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

  const UpdateFinalPrice = (itemId: any, price: any) => {
    setCartItems((prev) => {
      const UpdateItems = [...prev];
      UpdateItems[itemId] = {
        ...UpdateItems[itemId],
        Finalprice: price,
      };
      return UpdateItems;
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const price = parseFloat(
        `${cartItems[i].Finalprice ? cartItems[i].Finalprice : ""}`
      );
      total = total + price;
    }
    setTotalPrice(total);
  }, [cartItems]);


  useEffect(() => {
    // Retrieve cart items from local storage when the component mounts
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  console.log(cartItems, "to check final update");
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        totalUniqueItems,
        TotalPrice,
        UpdateFinalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
