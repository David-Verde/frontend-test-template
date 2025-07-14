import { gameService } from '@/services/gameService';
import { GameCard } from '@/components/game/GameCard';

interface HomePageProps {
  searchParams: {
    genre?: string;
    page?: string;
  };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { genre, page } = searchParams;
  const pageNumber = page ? parseInt(page, 10) : 1;

  const { games, availableFilters, totalPages, currentPage } = await gameService.getGames({
    genre,
    page: pageNumber,
  });

  return (
    <section>
      <div className="mb-lg">
        <h1 className="text-3xl font-bold mb-sm">Top Sellers</h1>
        {/* filters */}
      </div>

      {games.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <p>No games found matching your criteria.</p>
      )}

      {/* see more */}
    </section>
  );
}