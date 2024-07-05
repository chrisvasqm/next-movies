import { Box } from '@radix-ui/themes';
import MovieList from './MovieList';

export default function Home() {
  return (
    <Box style={{ padding: 10 }}>
      <MovieList />
    </Box>
  );
}
