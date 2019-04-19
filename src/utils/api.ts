import axios from "axios";

export const API_ENDPOINT = 'https://api.yelp.com/v3/businesses/search';
const API_KEY = '';

const requestConfig = {
    method:'get',
    baseURL: API_ENDPOINT,
    responseType: 'json',
    headers:  {'Authorization': `Bearer ${API_KEY}`} ,
    params: {
        term: 'Coffee',
        location: 'Amsterdam, NL'
    },
};

export async function fetchPlaces() {
    const response = await axios(requestConfig);
    return await response.data;
}