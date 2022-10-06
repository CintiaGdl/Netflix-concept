import React , { useEffect, useState } from "react";
import { API_trending_all, API_trending_movies, API_trending_tvshow, API_tvshow_latest, API_tvshow_popular } from "../service/api";

export const ApiContext = React.createContext();

export const ApiProvider = ({children}) => {

    const [trendingAll, setTrendingAll] = useState([]);
    const [trendingMovies, setTrendingMovie] = useState([]);
    const [trendingTVShow, setTrendingTVShow] = useState([]);
    const [tvShow_popular, setTvShow_popular] = useState([]);

    const [search, setSearch] = useState();
    
    useEffect(() => {
        API_trending_all
        .get()
        .then((response) => {
            
            setTrendingAll(response.data.results)
            
        })
        .catch((error) => {
            console.error(error);
        });
        
        API_trending_movies
        .get()
        .then((response) => {
            
            setTrendingMovie(response.data.results)
            
        })
        .catch((error) => {
            console.error(error);
        });
        
        API_trending_tvshow
        .get()
        .then((response) => {
            
            setTrendingTVShow(response.data.results)
            
        })
        .catch((error) => {
            console.error(error);
        });
        
        API_tvshow_popular
        .get()
        .then((response) => {
            
            setTvShow_popular(response.data.results)
            
        })
        .catch((error) => {
            console.error(error);
        });

    }, []);
    
    return (
        <ApiContext.Provider value={{trendingAll, trendingMovies, trendingTVShow, setSearch, search, tvShow_popular}}>
            {children}
        </ApiContext.Provider>
    )
}

