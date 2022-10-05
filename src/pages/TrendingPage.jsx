import React from 'react'
import TrendingMovies from '../components/trending/TrendingMovies'
import TrendingTVShow from '../components/trending/TrendingTVShow'

export default function TrendingPage() {
  return (
    <div>
      <TrendingMovies />
      <TrendingTVShow />
    </div>
  )
}
