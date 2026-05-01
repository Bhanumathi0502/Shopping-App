import { useState } from "react";

export default function ShoppingApp() {
    const [stock, setStock] = useState({
    Jacket: 5,
    Pants: 4,
    Scarf: 2,
    Pajamas: 5,
    Shirt: 6,
  });

  const [cart, setCart] = useState({
    Jacket: 0,
    Pants: 0,
    Scarf: 0,
    Pajamas: 0,
    Shirt: 0,
  });

  const PRICE = 10; 

  function addItem(item) {
    if (stock[item] > 0) {
      setStock({ ...stock, [item]: stock[item] - 1 });
      setCart({ ...cart, [item]: cart[item] + 1 });
    }
  }

  const bill = Object.values(cart).reduce((t, n) => t + n * PRICE, 0);

  return (
    <div style={{ padding: 20, background: "#a3d1e1ff" }}>
      <h2>Clothing List</h2>

      {Object.keys(stock).map((item) => (
        <button
          key={item}
          style={{ margin: 5 }}
          onClick={() => addItem(item)}
        >
          {item}:{stock[item]}
        </button>
      ))}

      <h2>Shopping Cart</h2>

      {Object.keys(cart).map((item) => (
        <span
          key={item}
          style={{
            border: "1px solid red",
            padding: 5,
            margin: 5,
            background: "white",
          }}
        >
          {item}:{cart[item]}
        </span>
      ))}

      <h2>Bill Amount is $ {bill}</h2>
    </div>
  );
}
