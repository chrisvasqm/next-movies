import React from 'react'
import Movie from './_models/Movie'
import { Card, Flex, Text } from '@radix-ui/themes'

interface Props {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  return (
    <Card>
      <Flex direction='column'>
        <Text size={'6'}>{movie.title}</Text>
        <Text>{movie.description}</Text>
        <Text size={'5'} mt={'3'}>${movie.price}</Text>
      </Flex>
    </Card>
  )
}

export default MovieCard