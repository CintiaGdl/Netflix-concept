import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../shared/context/ApiContext';
import { APIHeaders, apiKey } from '../../shared/service/api';

export default function Play() {

    const {id} = useContext(ApiContext);

    const [results, setresult] = useState();


     const API_videos_id = axios.create({
        baseURL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`,
        timeout: 6000,
        headers: APIHeaders
    });

    useEffect(() => {
        API_videos_id
        .get()
        .then((response) => {
            
            setresult(response.data.results)
            
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

  return (
    <div>
        <div className="gallery">
              {results && results
                  .map(oneResult => {
                      return (
                          <div key={oneResult.id} className='itemGallery'>
                            <h1>{oneResult.name}</h1>
                          </div>
                      )
                  })
              }
      </div>
    </div>
  )
}
