import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../shared/context/ApiContext';
import Glider from "react-glider";
import "glider-js/glider.css";

export default function Movies() {

    const { movies_popular, setId } = useContext(ApiContext);

    const onClick = (id) => {
        setId(id);
    };

    return (
        <div>
            <h1>Popular movies</h1>
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
                    {movies_popular && movies_popular
                        .map(movie => {
                            return (
                                <NavLink to='/play' onClick={() => onClick(movie.id)}>
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
