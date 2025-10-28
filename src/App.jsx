import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#222",
        color: "#fff",
      }}
    >
      <h2><center>Mini Store</center></h2>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Products
        </Link>
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router basename="/PranathiG29_3_MiniProject">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
