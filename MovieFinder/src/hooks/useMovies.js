import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

export const useMovies = ({ query, sort }) => {
	const [movies, setMovies] = useState([]);
	const [loadingMovies, setLoadingMovies] = useState(false);
	const [errorMovies, setErrorMovies] = useState(null);
	const previousSearch = useRef(query);

	const getMovies = useCallback(async ({ query }) => {
		if (query === previousSearch.current) return;

		try {
			setLoadingMovies(true);
			setErrorMovies(null);
			previousSearch.current = query;
			const newMovies = await searchMovies({ query });
			setMovies(newMovies);

		} catch (error) {
			setErrorMovies(error.message);

		} finally {
			setLoadingMovies(false);
		}
	}, [])

	const sortedMovies = useMemo(() => {
		if (!movies) return null
		return sort
			? [...movies].sort((a, b) => a.title.localeCompare(b.title))
			: movies
	}, [sort, movies])


	return {
		movies: sortedMovies,
		getMovies,
		loadingMovies,
		errorMovies
	}
}