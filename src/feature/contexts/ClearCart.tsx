import React from "react";
import { useCart } from "./CartContext";

const ClearCart = () => {
  const { dispatch } = useCart();

  const handleClear = () => {
    dispatch({ type: "clear" });
  };
  return (
    <div>
      <button onClick={handleClear}>クリア</button>
    </div>
  );
};

export default ClearCart;
