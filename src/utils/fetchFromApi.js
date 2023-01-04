import axios from "axios";

export const fetchFromApi = async (genrelist, query) => {
    const BASE_URL = 'https://unogsng.p.rapidapi.com/search';

    const options = {
        url: BASE_URL,
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
            'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
        },
        params: {
            orderby: 'rating',
            audiosubtitle_andor: 'and',
            limit: '100',
            audio: 'english',
            offset: '0',
            type: 'movie',
            genrelist,
            query
        },
    }
    const { data } = await axios.get(`${BASE_URL}`, options)
    return data;
}

export const getTraillerIdFromApi = async (imdbId) => {
    const BASE_URL = 'https://online-movie-database.p.rapidapi.com/title/get-videos';

    const options = {
        params: { tconst: `${imdbId}`, limit: '1' },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const { data } = await axios.get(`${BASE_URL}`, options)
    return data;
}

export const getTraillerLinkFromApi = async (linkId) => {
    const BASE_URL = 'https://online-movie-database.p.rapidapi.com/title/get-video-playback';

    const options = {
        params: { viconst: `${linkId}` },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    const { data } = await axios.get(`${BASE_URL}`, options)
    return data;
}