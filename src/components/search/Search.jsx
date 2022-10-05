import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../shared/context/ApiContext';
import { APIHeaders } from '../../shared/service/api';




export default function Search() {
    
    const {search} = useContext(ApiContext);
    
    const [resultSearch, setresultSearch] = useState();


    const apiKey = process.env.REACT_APP_apiKey;

    
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
              {resultSearch && resultSearch
                  .map(oneResult => {
                      return (
                          <div key={oneResult.id} className='itemGallery'>
                              <img src={`https://image.tmdb.org/t/p/w500${oneResult.poster_path}`} alt={oneResult.title} />
                          </div>
                      )
                  })
              }
      </div>
    </div>
  )
}
