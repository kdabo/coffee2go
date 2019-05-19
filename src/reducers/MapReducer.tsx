import { Reducer } from "redux";
import {IMapMarker, IMapState, MapActionTypes} from "../types/MapTypes";

const initialMapState: IMapState = {
    markers: []
};

export const mapReducer: Reducer<IMapState> = (state = initialMapState, action) => {
    switch (action.type) {
        case MapActionTypes.FETCH_MARKERS: {
            return {
               ...state,
                markers: action.payload
            }

        }
    }
    return state;
};
