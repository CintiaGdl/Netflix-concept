import React, { useContext } from 'react'
import { ApiContext } from '../../shared/context/ApiContext';

export default function TvShow() {

    const {tvShow_popular} = useContext(ApiContext);

    return (
        <div>
        <h1>Popular TV Show</h1>
        <div className="gallery">
                {tvShow_popular && tvShow_popular
                    .map(tvShow => {
                        return (
                            <div key={tvShow.id} className='itemGallery'>
                                <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt={tvShow.title} />
                            </div>
                        )
                    })
                }
        </div>
    </div>
    )
}
