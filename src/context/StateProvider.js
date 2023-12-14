import React, { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../data/item";

export const StateContext = createContext(null);

export const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

function StateProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart };

    console.log(cartItems);

    return (
        <StateContext.Provider value={contextValue}>
            {props.children}
        </StateContext.Provider>
    );
}

export const useStateValue = () => useContext(StateContext);

export default StateProvider;
