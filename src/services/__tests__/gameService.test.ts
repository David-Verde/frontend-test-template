/**
 * @jest-environment-jsdom
 */


const buildGamesUrl = (baseUrl: string, params: { genre?: string | null; page?: number }): string => {
  const url = new URL(`${baseUrl}/games`);
  if (params.genre) {
    url.searchParams.append('genre', params.genre);
  }
  url.searchParams.append('page', (params.page || 1).toString());
  return url.toString();
};


describe('gameService URL builder', () => {
  const baseUrl = 'http://localhost:3000/api';

  it('should build a basic URL with page 1 by default', () => {
    const url = buildGamesUrl(baseUrl, {});
    expect(url).toBe('http://localhost:3000/api/games?page=1');
  });

  it('should include the genre parameter when provided', () => {
    const url = buildGamesUrl(baseUrl, { genre: 'RPG' });
    expect(url).toBe('http://localhost:3000/api/games?genre=RPG&page=1');
  });

  it('should handle genres with spaces correctly (URL encoding)', () => {
    const url = buildGamesUrl(baseUrl, { genre: 'Battle Royale' });
    expect(url).toBe('http://localhost:3000/api/games?genre=Battle+Royale&page=1');
  });

  it('should include the page parameter when provided', () => {
    const url = buildGamesUrl(baseUrl, { page: 3 });
    expect(url).toBe('http://localhost:3000/api/games?page=3');
  });

  it('should include both genre and page parameters', () => {
    const url = buildGamesUrl(baseUrl, { genre: 'Action', page: 2 });
    expect(url).toBe('http://localhost:3000/api/games?genre=Action&page=2');
  });
});