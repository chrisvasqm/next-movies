'use client'

import { Grid } from '@radix-ui/themes'
import { useQuery } from 'react-query'
import MovieCard from './MovieCard'
import Movie from './_models/Movie'
import ms from 'ms'

const fetchMovies = async () => {
  const response = await fetch('/api/movies')
  return await response.json()
}

function MovieList() {
  const { data: movies, isLoading, error } = useQuery<Movie[], Error>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    staleTime: ms('5s')
  })

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  return (
    <>
      {movies?.length === 0 && <p>Catalog is empty</p>}

      {movies &&
        <Grid columns={{ initial: '1', xs: '2', sm: '2', md: '3', lg: '4' }} gap='3'>
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </Grid>
      }
    </>
  )
}

export default MovieList