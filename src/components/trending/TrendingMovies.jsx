import React, { useContext } from 'react'
import { ApiContext } from '../../shared/context/ApiContext'
import Glider from "react-glider";
import "glider-js/glider.css";
import { NavLink } from 'react-router-dom';

export default function TrendingMovies() {

    const { trendingMovies, setId, setType } = useContext(ApiContext);

    const onClick = (id, type) => {
        setId(id);
        setType(type);
    };

    return (
        <div className='pageComponent'>
            <div className="titleComponent">
                <h1>Trending movies</h1>
            </div>
            <div className="gallery">
                <Glider
                    hasArrows
                    draggable
                    slidesToShow={2}
                    slidesToScroll={2}
                    scrollLock
                    responsive={[
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 900,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        },
                        {
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        }
                    ]}
                >
                    {trendingMovies && trendingMovies
                        .map(movie => {
                            return (
                                <NavLink to='/play' onClick={() => onClick(movie.id, 'movie')}>
                                    <div key={movie.id} className='itemGallery'>
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </Glider>
            </div>
        </div>
    )
}
