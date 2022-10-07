import React, { useContext } from 'react'
import "glider-js/glider.min.css";
import { ApiContext } from '../../shared/context/ApiContext';


export default function TrendingAll() {
    
    const {trendingAll} = useContext(ApiContext);

    return (
        <div>
            <h1>Trending topic</h1>
            <div className="gallery">
                    {trendingAll && trendingAll
                        .map(oneMovieTVShow => {
                            return (
                                <div key={oneMovieTVShow.id} className='itemGallery'>
                                    <img src={`https://image.tmdb.org/t/p/w500${oneMovieTVShow.poster_path}`} alt={oneMovieTVShow.title} />
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    );
}
