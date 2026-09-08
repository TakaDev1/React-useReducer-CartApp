import React from "react";
import { useCart } from "../contexts/CartContext";

const DisplayCart = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (id: string) => {
    dispatch({ type: "remove", id: id });
  };
  return (
    <div>
      {state.length > 0 ? (
        <div>
          <ul>
            {state.map((cart) => (
              <li
                key={cart.product.id}
                className="w-1/2 mx-auto py-5 rounded-xl flex items-center justify-around bg-blue-900 text-white my-5"
              >
                <p>商品名: {cart.product.name}</p>
                <p>金額: {cart.product.price}</p>
                <p>数量: {cart.quantity}</p>
                <button
                  onClick={() => handleRemove(cart.product.id)}
                  className="bg-red-800 w-15 rounded-full py-1 hover:opacity-80 cursor-pointer"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>商品が空です</p>
      )}
    </div>
  );
};

export default DisplayCart;
