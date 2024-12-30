import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
      <button className="bg-green-500 text-white px-4 py-2">Checkout</button>
    </div>
  );
};

export default Cart;
