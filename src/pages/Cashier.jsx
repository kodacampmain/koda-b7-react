import { useState } from "react";
import CashierItems from "../components/CashierItems.jsx";
import CashierCart from "../components/CashierCart.jsx";

const items = [
  {
    id: 1,
    name: "A",
    price: 5000,
  },
  {
    id: 2,
    name: "B",
    price: 6000,
  },
  {
    id: 3,
    name: "C",
    price: 4000,
  },
  {
    id: 4,
    name: "D",
    price: 10000,
  },
];

function Cashier() {
  const [products] = useState(items);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((oldCart) => {
      let isFound = false;
      const newCart = oldCart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          isFound = true;
          return {
            ...cartProduct,
            qty: cartProduct.qty + 1,
          };
        }
        return cartProduct;
      });
      if (isFound) {
        return newCart;
      }
      return [...oldCart, { ...product, qty: 1 }];
    });
  };
  const removeFromCart = (productId) => {
    setCart((oldCart) => {
      let isFound = false;
      const newCart = oldCart.map((cartProduct) => {
        if (cartProduct.id === productId && cartProduct.qty > 1) {
          isFound = true;
          return {
            ...cartProduct,
            qty: cartProduct.qty - 1,
          };
        }
        return cartProduct;
      });
      if (isFound) {
        return newCart;
      }
      return oldCart.filter((product) => product.id !== productId);
    });
  };
  return (
    <main className="grid grid-cols-[5fr_2fr] lg:grid-cols-[1fr_200px] gap-x-1.25 min-h-screen grid-rows-[auto_1fr]">
      <header className="col-span-2 p-2 bg-amber-300">
        <h1>Cashier</h1>
      </header>
      <CashierItems items={products} onAddToCart={addToCart} />
      <CashierCart cart={cart} onRemoveFromCart={removeFromCart} />
    </main>
  );
}

export default Cashier;
