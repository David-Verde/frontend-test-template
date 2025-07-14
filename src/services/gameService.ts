import { GamesApiResponse } from '@/types';

interface GetGamesParams {
  genre?: string | null;
  page?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const gameService = {
  async getGames({ genre, page = 1 }: GetGamesParams): Promise<GamesApiResponse> {
    const url = new URL(`${API_BASE_URL}/games`);

    if (genre) {
      url.searchParams.append('genre', genre);
    }
    url.searchParams.append('page', page.toString());

    try {
      const response = await fetch(url.toString(), {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch games');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);

      return {
        games: [],
        availableFilters: [],
        totalPages: 0,
        currentPage: 1,
      };
    }
  },
};