import "./App.css";
import { CartProvider } from "./feature/contexts/CartContext";
import ClearCart from "./feature/components/ClearCart";
import DisplayCart from "./feature/components/DisplayCart";
import AddProduct from "./feature/components/AddProduct";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
      <h1>React-useReducer-CartApp</h1>
      <CartProvider>
        <div>
          <DisplayCart />
          <ClearCart />
          <AddProduct />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
