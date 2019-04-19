import { Reducer } from "redux"; // importing reducer type
import { ILocationState, LocationssActionTypes } from "../types/LocationsTypes";

const initialLocationState: ILocationState = {
    locations: [],
    currentLocation: null,
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
        case LocationssActionTypes.FETCH_LOCATION: {
            return {
                ...state,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                locations: action.locations,
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