import React from "react";
import { useCart } from "../contexts/CartContext";

const ClearCart = () => {
  const { state, dispatch } = useCart();

  const handleClear = () => {
    dispatch({ type: "clear" });
  };
  return (
    <div>
      <button onClick={handleClear}>クリア</button>

      {state.length > 0 ? <button onClick={handleClear}>クリア</button> : <p></p>}
    </div>
  );
};

export default ClearCart;
