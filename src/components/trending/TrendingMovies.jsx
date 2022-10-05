import React, { useContext } from 'react'
import { ApiContext } from '../../shared/context/ApiContext'

export default function TrendingMovies() {

  const {trendingMovies} = useContext(ApiContext);

    return (
      <div>
      <h1>Trending movies</h1>
      <div className="gallery">
              {trendingMovies && trendingMovies
                  .map(movie => {
                      return (
                          <div key={movie.id} className='itemGallery'>
                              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                          </div>
                      )
                  })
              }
      </div>
  </div>
  )
}
