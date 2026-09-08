import React from "react";
import { useCart } from "../contexts/CartContext";

const ClearCart = () => {
  const { state, dispatch } = useCart();

  const handleClear = () => {
    dispatch({ type: "clear" });
  };
  return (
    <div className="mb-5">
      {state.length > 0 ? (
        <button
          className=" bg-gray-500 text-white font-bold w-1/4 mx-auto py-2 rounded-full hover:opacity-80 cursor-pointer"
          onClick={handleClear}
        >
          クリア
        </button>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ClearCart;
