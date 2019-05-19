export enum MapActionTypes {
    FETCH_MARKERS = "FETCH_MARKERS",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR"
}

export interface IMapFetchMarkersAction {
    type: MapActionTypes.FETCH_MARKERS,
    markers: IMapMarker
}

export interface IMapSuccessAction {
    type: MapActionTypes.FETCH_SUCCESS
}

export interface IMapErrorAction {
    type: MapActionTypes.FETCH_ERROR
}

export interface IMapMarker {
    latitude: number
    longitude: number
}

export type MapActions = IMapFetchMarkersAction | IMapSuccessAction | IMapErrorAction;

export interface IMapState {
     markers: IMapMarker[];
}
