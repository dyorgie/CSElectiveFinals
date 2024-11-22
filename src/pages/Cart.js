import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase"; 

const Cart = () => {
  const { user } = useContext(UserContext); 
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart data from Firestore when the user is logged in
  useEffect(() => {
    if (user) {
      const fetchCartData = async () => {
        try {
          const cartRef = doc(db, "cart", user.uid);
          const cartDoc = await getDoc(cartRef);
          if (cartDoc.exists()) {
            setCartItems(cartDoc.data().cart); // Store cart items in state
          }
        } catch (error) {
          console.error("Error fetching cart data: ", error);
        }
      };
      fetchCartData();
    }
  }, [user]);

  // Add item to the cart
  const addItemToCart = async (item) => {
    if (!user) {
      alert("You must be logged in to add items to the cart");
      return; // Prevent adding item if not logged in
    }

    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart); // Update local state immediately

    try {
      const cartRef = doc(db, "cart", user.uid);
      await updateDoc(cartRef, { cart: updatedCart }); // Update Firestore cart
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    }
  };

  // Update item quantity (increase or decrease)
  const updateQuantity = async (id, newQuantity) => {
    if (!user) {
      alert("You must be logged in to update quantities");
      return;
    }

    // Prevent negative quantities or zero
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart); // Update local state

    try {
      const cartRef = doc(db, "cart", user.uid);
      await updateDoc(cartRef, { cart: updatedCart }); // Update Firestore cart
    } catch (error) {
      console.error("Error updating cart quantity: ", error);
    }
  };

  // Remove item from the cart
  const removeItem = async (id) => {
    if (!user) {
      alert("You must be logged in to remove items from the cart");
      return;
    }

    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart); // Update local state immediately

    try {
      const cartRef = doc(db, "cart", user.uid);
      await updateDoc(cartRef, { cart: updatedCart }); // Remove item from Firestore
    } catch (error) {
      console.error("Error removing item from cart: ", error);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: "20px" }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div>
        <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
      </div>
    </div>
  );
};

export default Cart;
