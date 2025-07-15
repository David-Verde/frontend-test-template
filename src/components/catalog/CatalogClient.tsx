'use client';

import { useState, useEffect, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Game } from '@/types';
import { gameService } from '@/services/gameService';
import { GameCard } from '@/components/game/GameCard';
import { Spinner } from '@/components/ui/Spinner';

interface CatalogClientProps {
  initialGames: Game[];
  availableFilters: string[];
  totalPages: number;
  initialPage: number;
  genre?: string;
}

export const CatalogClient = ({ 
  initialGames, 
   availableFilters = [],
  totalPages, 
  initialPage,
   genre,
}: CatalogClientProps) => {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isFiltering, startTransition] = useTransition();

  useEffect(() => {
    setGames(initialGames);
    setCurrentPage(initialPage);
  }, [initialGames, initialPage]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGenre = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (newGenre === 'all') {
      params.delete('genre');
    } else {
      params.set('genre', newGenre);
    }
    params.delete('page');

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const loadMoreGames = async () => {
    if (currentPage >= totalPages) return;
    setIsLoadingMore(true);

    const nextPage = currentPage + 1;
    const genre = searchParams.get('genre') || undefined;
    const data = await gameService.getGames({ genre, page: nextPage });
    
    setGames((prevGames) => [...prevGames, ...data.games]);
    setCurrentPage(nextPage);
    setIsLoadingMore(false);

    const params = new URLSearchParams(window.location.search);
    params.set('page', nextPage.toString());
    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  const currentGenre = searchParams.get('genre') || 'all';

  return (
    <section>
      <div className="mb-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-md">
        <h1 className="text-3xl font-bold">Top Sellers</h1>
        <div className="flex items-center gap-x-4">
          <label htmlFor="genre-filter" className="font-semibold">Genre</label>
          <select 
            id="genre-filter" 
            value={currentGenre} 
            onChange={handleFilterChange} 
            disabled={isFiltering} 
            className="border border-border-primary rounded px-3 py-2 bg-surface-primary disabled:opacity-50"
          >
            <option value="all">All</option>
            {availableFilters.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="relative">
        {isFiltering && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-20">
            <Spinner />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      {isLoadingMore && <p className="text-center mt-lg">Loading more games...</p>}

      {currentPage < totalPages && !isLoadingMore && (
        <div className="mt-lg py-md">
          <button
            onClick={loadMoreGames}
            className="bg-button-secondary text-white font-bold py-2 px-12 rounded hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};