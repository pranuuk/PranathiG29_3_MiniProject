import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // ✅ from context

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2><center>🛍️ Products</center></h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => addToCart(product)} // ✅ useCart function
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
