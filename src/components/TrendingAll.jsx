import React, { useEffect, useState } from 'react'
import { API } from '../shared/service/api';

export default function TrendingAll() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      
        API
        .get()
        .then((response) => {
            setMovie(response.data.results)
        })
        .catch((error) => {
            console.error(error);
        });
        
     
    }, []);
  
    return (
      <div>
        <h1>Trending topic</h1>
        <div className="Gallery">
            {movie && movie
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
    );
}
