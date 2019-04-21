import axios from "axios";

const API_ENDPOINT = 'http://localhost:4000';

const requestConfig = {
    method:'get',
    baseURL: `${API_ENDPOINT}/api/locations`,
};

export async function fetchPlaces() {
    const response = await axios(requestConfig);
    return await response.data;
}

export async function fetchPlace(id: number) {
    return id;
}
