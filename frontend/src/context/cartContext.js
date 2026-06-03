import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

    const [cartData, setCartData] = useState(() => JSON.parse(localStorage.getItem('cartData')) || []);

    const addToCart = (itemId, seller,sellerId) => {
        if (!cartData.some(data => data.id === itemId)) {
            const newCart = [...cartData, { id: itemId, sellerName: seller, sellerId: sellerId }];
            setCartData(newCart);
            localStorage.setItem('cartData', JSON.stringify(newCart));
        }
    }

    const removeFromCart = (itemId) => {
        const newCart = cartData.filter(data => data.id !== itemId);
        setCartData(newCart);
        localStorage.setItem('cartData', JSON.stringify(newCart));
    }

    return (
        <CartContext.Provider value={{ cartData, addToCart, removeFromCart, }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
    return ctx;
};
