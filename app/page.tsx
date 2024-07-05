import { Box } from '@radix-ui/themes';
import MovieList from './MovieList';

const movies = [
  { id: 1, title: 'Transformer 3', description: 'A long description...', price: 9.99 },
  { id: 2, title: 'Lord of the Rings', description: 'A long description...', price: 9.99 },
  { id: 3, title: 'Star Wars', description: 'A long description...', price: 9.99 },
  { id: 4, title: 'Step Up 4', description: 'A long description...', price: 9.99 },
  { id: 5, title: 'Cars', description: 'A long description...', price: 9.99 },
  { id: 6, title: 'Moana', description: 'A long description...', price: 9.99 }
]

export default function Home() {
  return (
    <Box style={{ padding: 10 }}>
      <MovieList movies={movies} />
    </Box>
  );
}
