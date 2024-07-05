'use client'

import { Grid } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Movie from './_models/Movie';

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('/api/movies')
      const movies = await response.json()
      setLoading(false)
      setMovies(movies)
    }

    fetchMovies()
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      {movies.length === 0 && <p>Catalog is empty</p>}

      {movies &&
        <Grid columns={{ initial: '1', xs: '2', sm: '2', md: '3', lg: '4' }} gap='3'>
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </Grid>
      }
    </>
  )
}

export default MovieList