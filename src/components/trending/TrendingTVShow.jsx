import React, { useContext } from 'react'
import { ApiContext } from '../../shared/context/ApiContext';
import Glider from "react-glider";
import "glider-js/glider.css";

export default function TrendingTVShow() {

    const { trendingTVShow } = useContext(ApiContext);


    return (
        <div>
            <h1>Trending TV Show</h1>
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
                    {trendingTVShow && trendingTVShow
                        .map(tvShow => {
                            return (
                                <div key={tvShow.id} className='itemGallery'>
                                    <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt={tvShow.title} />
                                </div>
                            )
                        })
                    }
                </Glider>
            </div>
        </div>
    )
}
