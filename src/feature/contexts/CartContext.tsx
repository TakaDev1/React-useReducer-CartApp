import React, { createContext, useContext, useReducer, type Dispatch } from "react";
import type { Action, State } from "../types/ProductCart";
import CartReducer from "../reducers/CartReducer";

interface CartContextInterface {
  state: State;
  dispatch: Dispatch<Action>;
}

const CartContext = createContext<CartContextInterface | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(CartReducer, [] as State);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContextの範囲外です");
  }

  return context;
};

export { CartProvider, useCart };
