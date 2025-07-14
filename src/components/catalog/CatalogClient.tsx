'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Game } from '@/types';
import { gameService } from '@/services/gameService';
import { GameCard } from '@/components/game/GameCard';

interface CatalogClientProps {
  initialGames: Game[];
  totalPages: number;
  initialPage: number;
  genre?: string;
}

export const CatalogClient = ({ initialGames, totalPages, initialPage, genre }: CatalogClientProps) => {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Efecto para sincronizar el estado cuando cambian las props iniciales
  useEffect(() => {
    setGames(initialGames);
    setCurrentPage(initialPage);
  }, [initialGames, initialPage]);

  const loadMoreGames = async () => {
    if (currentPage >= totalPages) return;
    setIsLoading(true);

    const nextPage = currentPage + 1;
    const data = await gameService.getGames({ genre, page: nextPage });
    
    setGames((prevGames) => [...prevGames, ...data.games]);
    setCurrentPage(nextPage);
    setIsLoading(false);

    const params = new URLSearchParams(window.location.search);
    params.set('page', nextPage.toString());
    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {isLoading && <p className="text-center mt-lg">Loading more games...</p>}

      {currentPage < totalPages && !isLoading && (
        <div className="text-center mt-lg">
          <button
            onClick={loadMoreGames}
               className="w-full mt-6 bg-[#585660] text-white font-bold py-3 rounded hover:opacity-90 transition-opacity"
          >
            See More
          </button>
        </div>
      )}
    </>
  );
};