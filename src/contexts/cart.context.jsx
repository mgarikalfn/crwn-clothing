import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems,productToAdd) =>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {
            ...cartItem,quantity:cartItem.quantity + 1
        }:cartItem);
    }


    return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem = (cartItems,itemToRemove) => {
    const existingCartItem = cartItems.find ((cartItem) => cartItem.id === itemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    }else {
        return cartItems.map((cartItem) => cartItem.id === itemToRemove.id ? {
            ...cartItem,quantity:cartItem.quantity - 1 } : cartItem);
    }
};
const clearCartItem = (cartItems,itemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount : 0,
    cartTotal : 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems ]  = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal ,setCartTotal] =useState(0);

    useEffect(() => {
        setCartCount(cartItems.reduce((acc,item) => acc + item.quantity,0))
    },[cartItems]);

    useEffect(() => {
        setCartTotal(cartItems.reduce((acc,item) => acc + item.quantity*item.price,0))
    },[cartItems]);
     
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems,itemToRemove));
    }

    const clearItemFromCart = (itemToRemove) => {
        setCartItems(clearCartItem(cartItems,itemToRemove));
    }
    const value = { isCartOpen, setIsCartOpen,addItemToCart,cartItems ,cartCount,cartTotal,removeItemFromCart,clearItemFromCart};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};