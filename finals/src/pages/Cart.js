import React, { useState, useEffect } from "react";
import { db, auth } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        const userDoc = doc(db, "users", user.uid);
        const userData = await getDoc(userDoc);
        if (userData.exists()) {
          setCartItems(userData.data().cart || []);
        }
        setLoading(false);
      };

      fetchCart();
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <div>
      <h2>Your Cart</h2>
      {loading ? (
        <p>Loading cart...</p>
      ) : (
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index}>
                <p>{item.itemName}</p>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
