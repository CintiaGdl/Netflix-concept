import React, { useContext } from 'react'
import Glider from "react-glider";
import "glider-js/glider.css";
import { ApiContext } from '../../shared/context/ApiContext';


export default function TrendingAll() {
    
    const {trendingAll} = useContext(ApiContext);

    return (
        <div>
            <h1>Trending topic</h1>
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
                    {trendingAll && trendingAll
                        .map(oneMovieTVShow => {
                            return (
                                <div key={oneMovieTVShow.id} className='itemGallery'>
                                    <img src={`https://image.tmdb.org/t/p/w500${oneMovieTVShow.poster_path}`} alt={oneMovieTVShow.title} />
                                </div>
                            )
                        })
                    }
                </Glider>
            </div>
        </div>
    );
}
