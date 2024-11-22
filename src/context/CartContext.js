import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            const fetchCart = async () => {
                const userDoc = doc(db, "users", user.uid);
                const userData = await getDoc(userDoc);
                if (userData.exists()) {
                    setCart(userData.data().cart || []);
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

        const itemToAdd = {
            itemName: item.item,
            price: item.price,
            quantity: 1,
        };

        try {
            const userDoc = doc(db, "users", user.uid);
            const userData = await getDoc(userDoc);

            // has a cart and will update
            if (userData.exists()) {
                const currentCart = userData.data().cart || [];
                const existingItemIndex = currentCart.findIndex(
                    (cartItem) => cartItem.itemName === itemToAdd.itemName
                );

                // item exists, update the quantity
                if (existingItemIndex !== -1) {
                    currentCart[existingItemIndex].quantity += 1;
                    await updateDoc(userDoc, {
                        cart: currentCart,
                    });
                } else {
                    // new item to add to cart
                    await updateDoc(userDoc, {
                        cart: arrayUnion(itemToAdd),
                    });
                }
            } else {
                // no user data, create a new cart
                await setDoc(userDoc, {
                    cart: [itemToAdd],
                });
            }

            // Updates the local cart state after Firestore update
            setCart((prevCart) => [...prevCart, itemToAdd]);
        } catch (error) {
            console.error("Error adding to cart: ", error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
