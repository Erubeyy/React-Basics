const API_KEY = 'c789dbc9';

export const searchMovies = async ({ query }) => {
  if (query === '') return null;

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const jsonMovies = await response.json();

    const movies = jsonMovies.Search;
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }));

  } catch {
    throw new Error('Error Searching Movies')
  }

}