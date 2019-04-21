import { ILocation } from "./LocationTypes";

export enum LocationssActionTypes {
    GETALL = "GETALL",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
    GETSINGLE = "GETSINGLE",
    LOADING = "LOADING",
}

export interface ILocationsGetAllAction {
    type: LocationssActionTypes.GETALL,
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

export interface IBusinesses {
    businesses: ILocation[];
}

export interface ILocationState {
    readonly locations: IBusinesses;
    readonly locationsLoading: boolean;
    readonly currentLocation: ILocation;
    readonly errors?: string
}
