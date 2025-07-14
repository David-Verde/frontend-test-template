'use client';

import { useCart } from '@/hooks/useCart';
import { Game } from '@/types';

interface AddToCartButtonProps {
  game: Game;
}

export const AddToCartButton = ({ game }: AddToCartButtonProps) => {
  const { addToCart, removeFromCart, isItemInCart } = useCart();
  const inCart = isItemInCart(game.id);

  const handleClick = () => {
    if (inCart) {
      removeFromCart(game.id);
    } else {
      addToCart(game);
    }
  };

  const buttonText = inCart ? 'REMOVE' : 'ADD TO CART';
  const buttonClasses = `w-full border rounded px-4 py-2 text-sm font-semibold transition-colors ${
    inCart
      ? 'border-red-500 text-red-500 hover:bg-red-50'
      : 'border-border-primary hover:bg-gray-100'
  }`;

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {buttonText}
    </button>
  );
};