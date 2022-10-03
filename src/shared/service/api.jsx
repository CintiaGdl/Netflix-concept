import axios from "axios";

export const APIHeaders = {
    'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
};

const apiKey = '8a0710661d3c2195ca561e0323dd91f5';

const UrlsTrending = {
    all: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
};

export const API = axios.create({
    baseURL: `${UrlsTrending.all}`,
    timeout: 6000,
    headers: APIHeaders
})