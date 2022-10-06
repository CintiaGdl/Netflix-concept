import axios from "axios";

export const APIHeaders = {
    'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
};

export const apiKey = process.env.REACT_APP_apiKey;



const urlsTrending = {
    all: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
    movies: `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
    tvshow: `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`,
};

export const API_trending_all = axios.create({
    baseURL: `${urlsTrending.all}`,
    timeout: 6000,
    headers: APIHeaders
});

export const API_trending_movies = axios.create({
    baseURL: `${urlsTrending.movies}`,
    timeout: 6000,
    headers: APIHeaders
});

export const API_trending_tvshow = axios.create({
    baseURL: `${urlsTrending.tvshow}`,
    timeout: 6000,
    headers: APIHeaders
});

export const API_tvshow_popular = axios.create({
    baseURL: `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
    timeout: 6000,
    headers: APIHeaders
});

export const API_movies_popular = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    timeout: 6000,
    headers: APIHeaders
});

