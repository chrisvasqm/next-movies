import { Grid } from '@radix-ui/themes'
import MovieCard from './MovieCard'
import Movie from './_models/Movie'

interface Props {
  movies: Movie[]
}

function MovieList({ movies }: Props) {
  return (
    <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap='3' px="10">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </Grid>
  )
}

export default MovieList