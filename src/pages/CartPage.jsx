import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items added yet!</p>
      ) : (
        <div>
          {cart.map(item => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ccc",
                padding: "10px 0"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "60px", height: "60px", objectFit: "contain" }}
                />
                <div>
                  <p>{item.title}</p>
                  <p>${item.price} × {item.quantity}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
