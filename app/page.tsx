import { Box } from '@radix-ui/themes';
import MovieList from './MovieList';

const movies = [
  { id: 1, title: "Movie 1", description: "A long description...", price: 9.99 },
  { id: 2, title: "Movie 2", description: "A long description...", price: 9.99 },
  { id: 3, title: "Movie 3", description: "A long description...", price: 9.99 },
  { id: 4, title: "Movie 4", description: "A long description...", price: 9.99 },
  { id: 5, title: "Movie 5", description: "A long description...", price: 9.99 },
  { id: 6, title: "Movie 6", description: "A long description...", price: 9.99 }
]

export default function Home() {
  return (
    <Box style={{ paddingTop: 10 }}>
      <MovieList movies={movies} />
    </Box>
  );
}
