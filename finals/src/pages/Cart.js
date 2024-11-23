import { useCartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateItemQuantity } = useCartContext();

  return (
    <div>
      <h1>Your Cart</h1>
      <CartItems />
    </div>
  );
};

// Reusable CartItems component (shared by both page and modal)
export const CartItems = () => {
  const { cart, removeFromCart, updateItemQuantity } = useCartContext();

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div key={item.itemName} style={{ marginBottom: "20px" }}>
            <h3>{item.itemName}</h3>
            <p>Price: ${item.price}</p>
            <p>
              Quantity:
              <button
                onClick={() => updateItemQuantity(item.itemName, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              {item.quantity}
              <button onClick={() => updateItemQuantity(item.itemName, item.quantity + 1)}>
                +
              </button>
            </p>
            <button onClick={() => removeFromCart(item.itemName)}>Remove</button>
          </div>
        ))
      )}
      <div>
        <h3>
          Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default CartPage;