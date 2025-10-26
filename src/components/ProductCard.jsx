import React from "react";
import { useCart } from "../context/CartContext"; // 👈 import the context

const ProductCard = ({ product, onAdd }) => {
  const { cart } = useCart(); // 👈 get cart data
  const cartItem = cart.find((item) => item.id === product.id); // check if already added
  const quantity = cartItem ? cartItem.quantity : 0; // get quantity

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "220px",
        textAlign: "center",
        background: "#ecececff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />
      <h4 style={{ fontSize: "14px", margin: "10px 0" }}>{product.title}</h4>
      <p>
        <b>${product.price}</b>
      </p>

      <button onClick={onAdd}>Add to Cart</button>

      {/* 👇 show quantity info */}
      {quantity > 0 && (
        <p
          style={{
            marginTop: "8px",
            fontSize: "12px",
            color: "green",
          }}
        >
          Added: {quantity} {quantity === 1 ? "time" : "times"}
        </p>
      )}
    </div>
  );
};

export default ProductCard;
