import axios from "axios";

export const APIHeaders = {
    'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
};

const apiKey = '8a0710661d3c2195ca561e0323dd91f5';

const UrlsTrending = {
    all: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
    movies: `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
    tvshow: `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`,
};

export const API_trending_all = axios.create({
    baseURL: `${UrlsTrending.all}`,
    timeout: 6000,
    headers: APIHeaders
});

export const API_trending_movies = axios.create({
    baseURL: `${UrlsTrending.movies}`,
    timeout: 6000,
    headers: APIHeaders
});

export const API_trending_tvshow = axios.create({
    baseURL: `${UrlsTrending.movies}`,
    timeout: 6000,
    headers: APIHeaders
});