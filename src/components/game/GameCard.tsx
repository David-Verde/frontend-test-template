import Image from 'next/image';
import { Game } from '@/types';
import { AddToCartButton } from './AddToCartButton';

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="bg-surface-primary rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative">
        {game.isNew && (
          <div className="absolute top-2 left-2 bg-primary text-text-on-dark text-xs font-bold px-2 py-1 rounded z-10">
            NEW
          </div>
        )}
        <Image
          src={game.image}
          alt={game.name}
          width={400}
          height={225}
          className="w-full object-cover aspect-video"
        />
      </div>
      <div className="p-sm flex-grow flex flex-col">
        <p className="text-text-secondary text-sm uppercase">{game.genre}</p>
        
        <div className="flex justify-between items-start my-2">
          <h3 className="font-bold text-lg leading-tight">{game.name}</h3>
          <p className="font-semibold text-lg ml-2">{formatPrice(game.price)}</p>
        </div>
        
        <div className="mt-auto">
          <AddToCartButton game={game} />
        </div>
      </div>
    </div>
  );
};