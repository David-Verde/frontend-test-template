import { gameService } from '@/services/gameService';
import { GenreFilter } from '@/components/filters/GenreFilter';
import { CatalogClient } from '@/components/catalog/CatalogClient';

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
      

      {games.length > 0 ? (
        <CatalogClient 
          initialGames={games} 
          totalPages={totalPages} 
          initialPage={currentPage}
          genre={genre}
          availableFilters={availableFilters}
        />
      ) : (
        <p>No games found matching your criteria.</p>
      )}
    </section>
  );
}