import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../../shared/context/ApiContext'

export default function Movies() {

    const { movies_popular, setId } = useContext(ApiContext);

    const onClick = (id) => {
        setId(id);
    };

    return (
        <div>
            <h1>Popular movies</h1>
            <div className="gallery">
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
            </div>
        </div>
    )
}
