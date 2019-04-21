import axios from "axios";

const API_ENDPOINT = 'http://localhost:4000';

export async function fetchPlaces() {
    const requestConfig = {
        method:'get',
        baseURL: `${API_ENDPOINT}/api/locations`,
    };
    const response = await axios(requestConfig);
    return await response.data;
}

export async function fetchPlace(id: number) {
    const requestConfig = {
        method:'get',
        baseURL: `${API_ENDPOINT}/api/locations/${id}`,
    };
    const response = await axios(requestConfig);
    return await response.data;
}
