import { ILocation } from "./LocationTypes";

export enum LocationssActionTypes {
    FETCH_LOCATION = "FETCH_LOCATION",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
    GETSINGLE = "GETSINGLE",
    LOADING = "LOADING",
}

export interface ILocationsGetAllAction {
    type: LocationssActionTypes.FETCH_LOCATION,
    locations: ILocation[]
}

export interface ILocationGetSingleAction {
    type: LocationssActionTypes.GETSINGLE,
    location: ILocation
}

export interface ILocationLoadingAction {
    type: LocationssActionTypes.LOADING,
}

export interface ILocationSuccessAction {
    type: LocationssActionTypes.FETCH_SUCCESS,
}

export interface ILocationErrorAction {
    type: LocationssActionTypes.FETCH_ERROR,
}

export type LocationssAction = ILocationsGetAllAction | ILocationLoadingAction | ILocationGetSingleAction | ILocationSuccessAction | ILocationErrorAction;

export interface ILocationState {
    readonly locations: ILocation[];
    readonly locationsLoading: boolean;
    readonly currentLocation: ILocation | null;
    readonly errors?: string
}
