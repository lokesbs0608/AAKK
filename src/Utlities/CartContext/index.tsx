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
  const [search ,setsearch]:any=useState();

  const SearchProduct=(value:any)=>{
    setsearch(value);
  }

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

  const UpdateFinalPrice = (itemId: any, price: any,quantity:any) => {
    setCartItems((prev) => {
      const UpdateItems = [...prev];
      UpdateItems[itemId] = {
        ...UpdateItems[itemId],
        Finalprice: price,
        quantity:quantity,
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
useEffect(()=>{
  localStorage.setItem("TotalPrice",JSON.stringify(TotalPrice));
},[TotalPrice])

  console.log(search, "to check final update");
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
        SearchProduct,
        search
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
