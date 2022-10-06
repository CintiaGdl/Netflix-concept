import React from 'react'
import Movies from '../components/movies/Movies'
import TrendingMovies from '../components/trending/TrendingMovies'

export default function MoviesPage() {
  return (
    <div>
      <TrendingMovies />
      <Movies />
    </div>
  )
}
