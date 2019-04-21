import { combineReducers, Dispatch, Action, AnyAction} from "redux";
import { all, fork } from 'redux-saga/effects';

import { locationsReducer } from "./ProductsReducer";
import { basketReducer } from "./BasketReducer";
import { IBasketState } from "../types/BasketTypes";
import { ILocationState } from "../types/LocationsTypes";
import { productsSaga } from "../sagas/productsSagas";

export interface IApplicationState {
    locations: ILocationState,
    basket: IBasketState
}

export const createRootReducer = () =>
    combineReducers({
        locations: locationsReducer,
        basket: basketReducer,
    });

export function* rootSaga() {
    yield all([
        fork(productsSaga),
        // `fork()` any other store sagas down here...
    ])
}
