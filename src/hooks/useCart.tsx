'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Game } from '@/types';

interface CartItem extends Game {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: string) => void;
  isItemInCart: (gameId: string) => boolean;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'gamershop_cart';

export const CartProvider = ({ children }: { children: ReactNode }): React.ReactNode => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Failed to parse cart from localStorage', error);
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0 || localStorage.getItem(CART_STORAGE_KEY)) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (game: Game) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === game.id);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, { ...game, quantity: 1 }];
    });
  };

  const removeFromCart = (gameId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== gameId));
  };

  const isItemInCart = (gameId: string) => {
    return cartItems.some((item) => item.id === gameId);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isItemInCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};