import React, { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

const App = () => {
  const [sort, setSort] = useState(false);
  const { query, setQuery, error } = useSearch();
  const { movies, getMovies, loadingMovies, errorMovies } = useMovies({ query, sort });

  const debouncedGetMovies = useCallback(
    debounce(query => {
      getMovies({ query })
    }, 350)
    , []
  )

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery);
    debouncedGetMovies(newQuery);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ query })
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={handleInputChange}
            style={error ? { border: '1px solid red' } : null}
            placeholder="The Lord Of The Rings, Star Wars, The Godfather..."
          />
          <button type="submit">Search</button>
          <div className='sortContainer'>
            <label htmlFor="sort">Sort by Title</label>
            <input className='sortControl' type="checkbox" id="sort" onChange={handleSort} checked={sort} />
          </div>
        </form>
        {error && <h4 style={{ color: 'red', textAlign: 'center' }} >{error}</h4>}
      </header>

      <main>
        {
          loadingMovies
            ? <h4>Loading Movies...</h4>
            : errorMovies
              ? <h4>{errorMovies}</h4>
              : <Movies movies={movies} />
        }
      </main>
    </div >
  )
}

export default App;
