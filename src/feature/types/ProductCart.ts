interface Product {
  id: string;
  name: string;
  price: number;
}

interface Cart {
  product: Product;
  quantity: number;
}

type State = Cart[];

type Action = { type: "Add"; name: string } | { type: "remove"; id: string } | { type: "clear" };

export type { Product, Cart, State, Action };
