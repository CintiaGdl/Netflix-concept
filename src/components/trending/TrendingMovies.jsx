import React, { useContext } from 'react'
import { ApiContext } from '../../shared/context/ApiContext'
import Glider from "react-glider";
import "glider-js/glider.css";

export default function TrendingMovies() {

    const { trendingMovies } = useContext(ApiContext);

    return (
        <div>
            <h1>Trending movies</h1>
            <div className="gallery">
                <Glider
                    hasArrows
                    draggable
                    slidesToShow={2}
                    slidesToScroll={4}
                    scrollLock
                    responsive={[
                        {
                            breakpoint: 864,
                            settings: {
                                slidesToShow: 5,
                            }
                        }
                    ]}
                >
                    {trendingMovies && trendingMovies
                        .map(movie => {
                            return (
                                <div key={movie.id} className='itemGallery'>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                </div>
                            )
                        })
                    }
                </Glider>
            </div>
        </div>
    )
}
