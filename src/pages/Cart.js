import React, { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext"; // import context
import "./Cart.css"; // CSS file for styling

const Cart = () => {
  const { cart, addToCart } = useCartContext(); // Use the context
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items-container">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-details">
                <img
                  src={item.image} // Assuming `item.image` is the path to the image
                  alt={item.itemName}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{item.itemName}</h3>
                  <p className="cart-item-price">Price: ₱{item.price}</p>
                  <div className="cart-item-quantity">
                    <button className="quantity-button" onClick={() => addToCart(item)}>
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button className="quantity-button">
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <>
          <div className="cart-total">Total: ₱{totalPrice.toFixed(2)}</div>
          <button className="checkout-button">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
