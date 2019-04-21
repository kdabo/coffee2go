import { action } from 'typesafe-actions';
import { LocationssActionTypes } from "../types/LocationsTypes";
import { ILocation } from "../types/LocationTypes";

export const fetchLocation = (id: string) => action(LocationssActionTypes.GETSINGLE);
export const fetchLocations = (data: ILocation[]) => action(LocationssActionTypes.GETALL, data);
export const fetchSuccess = (data: ILocation[]) => action(LocationssActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(LocationssActionTypes.FETCH_ERROR, message);
