import {action} from "typesafe-actions";
import {IMapMarker, MapActionTypes} from "../types/MapTypes";

export const fetchMarkers = (marker: IMapMarker) => action(MapActionTypes.FETCH_MARKERS, marker);
export const fetchSuccess = (data: IMapMarker) => action(MapActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(MapActionTypes.FETCH_ERROR, message);

