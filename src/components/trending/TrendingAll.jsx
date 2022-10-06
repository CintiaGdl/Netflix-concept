import React, { useContext } from 'react'
// import Glider from "react-glider";
import "glider-js/glider.min.css";
import { ApiContext } from '../../shared/context/ApiContext';


export default function TrendingAll() {
    
    const {trendingAll} = useContext(ApiContext);

    return (
        <div>
            <h1>Trending topic</h1>
            <div className="gallery">
                {/* <Glider
                    slidesToShow={1}
                    // slidesToScroll={4}
                    scrollLock
                    // rewind
                    responsive={[
                        {
                          breakpoint: 650,
                          settings: {
                            slidesToShow: 3,
                          },
                        },
                        {
                            breakpoint: 864,
                            settings: {
                              slidesToShow: 5,
                            },
                          }
                      ]}
                > */}
                    {trendingAll && trendingAll
                        .map(oneMovieTVShow => {
                            return (
                                <div key={oneMovieTVShow.id} className='itemGallery'>
                                    <img src={`https://image.tmdb.org/t/p/w500${oneMovieTVShow.poster_path}`} alt={oneMovieTVShow.title} />
                                </div>
                            )
                        })
                    }
                {/* </Glider> */}
            </div>
        </div>
    );
}
