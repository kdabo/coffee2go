import { Reducer } from "redux"; // importing reducer type
import {ILocationState, IBusinesses, LocationssActionTypes} from "../types/LocationsTypes";
import {ILocation} from "../types/LocationTypes";

const initialLocationState: ILocationState = {
    locations: <IBusinesses>{},
    currentLocation: <ILocation>{},
    locationsLoading: false,
    errors: undefined,
};

export const locationsReducer: Reducer<ILocationState> = (state = initialLocationState, action) => {
    switch (action.type) {
        case LocationssActionTypes.GETSINGLE: {
            return {
                ...state,
                currentLocation: action.location,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.GETALL: {
            console.log("reducer", {...state})
            return {
                ...state,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.FETCH_SUCCESS: {
            console.log("reducer", action.payload)
            return {
                ...state,
                locations: action.payload,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.FETCH_ERROR: {
            return {
                ...state,
                errors: action.payload,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.LOADING: {
            return {
                ...state,
                locationsLoading: true
            }
        }
    }
    return state;
};
