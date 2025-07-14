'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface GenreFilterProps {
  genres: string[];
}

export const GenreFilter = ({ genres }: GenreFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get('genre') || 'all';

   const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGenre = event.target.value;
    const params = new URLSearchParams(window.location.search);

    if (newGenre === 'all') {
      params.delete('genre');
    } else {
      params.set('genre', newGenre);
    }
    params.delete('page'); 


    window.location.href = `${pathname}?${params.toString()}`;
  };


  return (
    <div className="flex items-center gap-x-4">
      <label htmlFor="genre-filter" className="font-semibold">
        Genre
      </label>
      <select
        id="genre-filter"
        value={currentGenre}
        onChange={handleFilterChange}
        className="border border-border-primary rounded px-3 py-2 bg-surface-primary"
      >
        <option value="all">All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};