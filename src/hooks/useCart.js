import AppContext from "../context";
import React from "react";

const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );
  return { cartItems, setCartItems, totalPrice };
};

export default useCart;
