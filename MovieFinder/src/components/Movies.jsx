import React from "react"

const MoviesList = ({ movies }) => {
	return (
		<ul className="movies">
			{
				movies.map(movie => (
					<li key={movie.id} className="movie">
						<h3>{movie.title}</h3>
						<p>{movie.year}</p>
						<img src={movie.poster} alt={movie.Title} />
					</li>
				))
			}
		</ul>
	)
}

const NomoviesResult = () => {
	return (
		<p>No movies found...</p>
	)
}

export const Movies = ({ movies }) => {
	return (
		movies
			? <MoviesList movies={movies} />
			: <NomoviesResult />
	)
}