// CartContext.js
import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        loadCartFromStorage();
    }, []);

    const loadCartFromStorage = async () => {
        try {
            const cartData = await AsyncStorage.getItem('cart');
            if (cartData !== null) {
                setCartItems(JSON.parse(cartData));
            }
        } catch (error) {
            console.log('Error loading cart:', error);
        }
    };

    const saveCartToStorage = async (cart) => {
        try {
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.log('Error saving cart:', error);
        }
    };

    const clearCart = async () => {
        try {
            await AsyncStorage.removeItem('cart');
            setCartItems([]);
            console.log('Cart cleared');
        } catch (error) {
            console.log('Error clearing cart:', error);
        }
    };

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        saveCartToStorage(updatedCart);
        console.log(`Added to cart: ${product.name}`);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        saveCartToStorage(updatedCart);
        console.log(`Removed from cart: ${productId}`);
    };

    const countCart = () => {
        console.log(cartItems.length + 1)
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                countCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


export default CartContext;
