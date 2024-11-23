import React from "react";
import { useCartContext } from "../context/CartContext";
import { CartItems } from "./Cart"; // Reuse CartItems component
import "./CartModal.css"; // Optional CSS for styling

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render modal if closed

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Your Cart</h2>
        <CartItems />
      </div>
    </div>
  );
};

export default CartModal;