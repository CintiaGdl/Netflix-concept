import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../shared/context/ApiContext';

export default function Search() {

    const {search} = useContext(ApiContext);

    const [resultSearch, setresultSearch] = useState();

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/search/multi?api_key=8a0710661d3c2195ca561e0323dd91f5&language=en-US&query=${search}`)
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
