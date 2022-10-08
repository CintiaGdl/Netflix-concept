import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../shared/context/ApiContext';
import { APIHeaders, apiKey } from '../../shared/service/api';
import Glider from "react-glider";
import "glider-js/glider.css";
import { NavLink } from 'react-router-dom';


export default function Search() {

    const { search, setId, setType } = useContext(ApiContext);

    const onClick = (id,type) => {
        setId(id);
        setType(type);
    };

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
        <div className='pageComponent'>
            <div className="titleComponent">
                <h1>Results for search... {search}</h1>
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
                    {resultSearch && resultSearch
                        .map(oneResult => {
                            return (
                                <NavLink to='/play' onClick={() => onClick(oneResult.id, oneResult.media_type)}>
                                    <div key={oneResult.id} className='itemGallery'>
                                        <img src={`https://image.tmdb.org/t/p/w500${oneResult.poster_path}`} alt={oneResult.title} />
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
