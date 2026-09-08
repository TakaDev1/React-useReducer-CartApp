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
              <li key={cart.product.id}>
                <p>商品名: {cart.product.name}</p>
                <p>金額: {cart.product.price}</p>
                <p>数量: {cart.quantity}</p>
                <button onClick={() => handleRemove(cart.product.id)}>×</button>
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
