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
    <div className="flex flex-col gap-5">
      <label htmlFor="name">
        商品名:
        <input
          id="name"
          type="text"
          value={input}
          onChange={handleInput}
          className="border rounded ml-5 text-white"
        />
      </label>
      <label htmlFor="price">
        金額:
        <input
          id="price"
          type="text"
          value={price}
          onChange={handlePrice}
          className="border rounded ml-5 text-white"
        />
      </label>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white w-1/4 mx-auto py-2 rounded-full hover:opacity-80"
      >
        追加
      </button>
    </div>
  );
};

export default AddProduct;
