import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../shared/context/ApiContext';
import { APIHeaders, apiKey } from '../../shared/service/api';
import Glider from "react-glider";
import "glider-js/glider.css";


export default function Search() {

    const { search } = useContext(ApiContext);

    const [resultSearch, setresultSearch] = useState();

    const API_search = axios.create({
        baseURL: `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}`,
        timeout: 6000,
        headers: APIHeaders
    })

    useEffect(() => {
        API_search
            .get()
            .then((response) => {

                setresultSearch(response.data.results)

            })
            .catch((error) => {
                console.error(error);
            })
    }, [search]);


    return (
        <div>
            <h1>Search</h1>
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
                    {resultSearch && resultSearch
                        .map(oneResult => {
                            return (
                                <div key={oneResult.id} className='itemGallery'>
                                    <img src={`https://image.tmdb.org/t/p/w500${oneResult.poster_path}`} alt={oneResult.title} />
                                </div>
                            )
                        })
                    }
                </Glider>
            </div>
        </div>
    )
}
