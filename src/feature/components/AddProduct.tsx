import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import type { Product } from "../types/ProductCart";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const { dispatch } = useCart();

  const [input, setInput] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleAdd = () => {
    const trimmedInput = input.trim();
    const trimmedPrice = price.trim();

    if (!trimmedInput) {
      throw new Error("商品名が未入力です");
    } else if (!/^\d+$/.test(trimmedPrice)) {
      throw new Error("金額が不正な値です");
    } else {
      const product: Product = {
        id: uuidv4(),
        name: trimmedInput,
        price: Number(trimmedPrice),
      };

      dispatch({ type: "add", product: product });
    }
  };

  return (
    <div>
      <label htmlFor="name">
        <input id="name" type="text" value={input} onChange={handleInput} placeholder="商品名: " />
      </label>
      <label htmlFor="price">
        <input id="price" type="text" value={price} onChange={handlePrice} placeholder="金額: " />
      </label>
      <button onClick={handleAdd}>追加</button>
    </div>
  );
};

export default AddProduct;
