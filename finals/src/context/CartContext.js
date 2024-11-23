import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const user = auth.currentUser;



  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        try {
          const userDoc = doc(db, "carts", user.uid);
          const userData = await getDoc(userDoc);
          if (userData.exists()) {
            setCart(userData.data().cart || []);
          }
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      };
      fetchCart();
    }
  }, [user]);

  const addToCart = async (item) => {
    if (!user) {
      alert("You must be logged in to add orders to the cart.");
      return;
    }

    const itemName = item.item || "Unnamed Item";
    const price = typeof item.price === "string" ? parseFloat(item.price.replace("P", "")) : item.price;
    const itemToAdd = { itemName, price, quantity: 1 };

    try {
      const userDoc = doc(db, "carts", user.uid);
      const userData = await getDoc(userDoc);

      if (userData.exists()) {
        const currentCart = userData.data().cart || [];
        const existingItemIndex = currentCart.findIndex(cartItem => cartItem.itemName === itemToAdd.itemName);

        if (existingItemIndex !== -1) {
          currentCart[existingItemIndex].quantity += 1;
          await updateDoc(userDoc, { cart: currentCart });
        } else {
          await updateDoc(userDoc, { cart: arrayUnion(itemToAdd) });
        }
      } else {
        await setDoc(userDoc, { cart: [itemToAdd] });
      }

      setCart(prevCart => [...prevCart, itemToAdd]);
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };

  const removeFromCart = async (itemName) => {
    if (!user) {
      alert("You must be logged in to modify the cart.");
      return;
    }

    try {
      const userDoc = doc(db, "carts", user.uid);
      const userData = await getDoc(userDoc);

      if (userData.exists()) {
        const currentCart = userData.data().cart || [];
        const updatedCart = currentCart.filter(item => item.itemName !== itemName);
        await updateDoc(userDoc, { cart: updatedCart });
        setCart(updatedCart);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const updateItemQuantity = async (itemName, newQuantity) => {
    if (!user) {
      alert("You must be logged in to modify the cart.");
      return;
    }

    try {
      const userDoc = doc(db, "carts", user.uid);
      const userData = await getDoc(userDoc);

      if (userData.exists()) {
        const currentCart = userData.data().cart || [];
        const itemIndex = currentCart.findIndex(item => item.itemName === itemName);

        if (itemIndex !== -1) {
          currentCart[itemIndex].quantity = newQuantity;
          await updateDoc(userDoc, { cart: currentCart });
          setCart([...currentCart]);
        }
      }
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;