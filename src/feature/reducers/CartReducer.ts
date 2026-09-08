import type { Action, State } from "../types/ProductCart";

const CartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return state.find((cart) => cart.product.id === action.product.id)
        ? state.map((cart) =>
            cart.product.id === action.product.id ? { ...cart, quantity: cart.quantity + 1 } : cart,
          )
        : [...state, { product: action.product, quantity: 1 }];

    case "remove":
      return state.filter((cart) => cart.product.id !== action.id);

    case "clear":
      return [];

    default:
      return state;
  }
};

export default CartReducer;
