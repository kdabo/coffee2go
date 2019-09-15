import axios from "axios";
import {IMapMarker} from "../types/MapTypes";
const controller = new AbortController();
const signal = controller.signal;

let API_ENDPOINT = 'http://www.coffee2go.io';

if (typeof window !== 'undefined') {
    if (document.location.hostname.indexOf('localhost') !== -1) {
        API_ENDPOINT = 'http://localhost:4000'
    }
}

export async function fetchPlaces() {
    const requestConfig = {
        method:'get',
        baseURL: `${API_ENDPOINT}/api/locations`,
        config: signal,
    };
    const response = await axios(requestConfig);
    return await response.data;
}

export async function fetchPlace(id: string) {
    const requestConfig = {
        method:'get',
        baseURL: `${API_ENDPOINT}/api/locations/${id}`,
        config: signal,
    };
    const response = await axios(requestConfig);
    return await response.data;
}

export async function fetchMapMarkers(mapMarker : IMapMarker) {
    const requestConfig = {
        method:'get',
        baseURL: `${API_ENDPOINT}/api/locations/`,
        params: {
            latitude: mapMarker.latitude,
            longitude: mapMarker.longitude
        },
        config: signal,
    };
    const response = await axios(requestConfig);
    return await response.data;
}
