import Movie from '@/app/_models/Movie';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest, _response: NextResponse) {
  const movies: Movie[] = [
    { id: 1, title: 'Transformer 3', description: 'A long description...', price: 9.99 },
    { id: 2, title: 'Lord of the Rings', description: 'A long description...', price: 9.99 },
    { id: 3, title: 'Star Wars', description: 'A long description...', price: 9.99 },
    { id: 4, title: 'Step Up 4', description: 'A long description...', price: 9.99 },
    { id: 5, title: 'Cars', description: 'A long description...', price: 9.99 },
    { id: 6, title: 'Moana', description: 'A long description...', price: 9.99 }
  ]

  return NextResponse.json(movies);
}