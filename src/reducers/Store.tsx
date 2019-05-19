import { combineReducers, Dispatch, Action, AnyAction} from "redux";
import { all, fork } from 'redux-saga/effects';

import { locationsReducer } from "./ProductsReducer";
import { basketReducer } from "./BasketReducer";
import { IBasketState } from "../types/BasketTypes";
import { ILocationState } from "../types/LocationsTypes";
import {IMapState} from "../types/MapTypes";

import { productsSaga } from "../sagas/productsSagas";
import {mapReducer} from "./MapReducer";
import {mapSaga} from "../sagas/mapSagas";

export interface IApplicationState {
    locations: ILocationState,
    basket: IBasketState,
    markers: IMapState
}

export const createRootReducer = () =>
    combineReducers({
        locations: locationsReducer,
        basket: basketReducer,
        markers: mapReducer
    });

export function* rootSaga() {
    yield all([
        fork(productsSaga),
        fork(mapSaga)
        // `fork()` any other store sagas down here...
    ])
}
