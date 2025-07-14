import Image from 'next/image';
import { Game } from '@/types';

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
          <div className="absolute top-2 left-2 bg-primary text-text-on-dark text-xs font-bold px-2 py-1 rounded">
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
        <p className="text-text-secondary text-sm">{game.genre}</p>
        <h3 className="font-bold text-lg mt-1">{game.name}</h3>
        <div className="mt-auto pt-sm flex justify-between items-center">
          <p className="font-semibold text-lg">{formatPrice(game.price)}</p>
          <button className="border border-border-primary rounded px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};