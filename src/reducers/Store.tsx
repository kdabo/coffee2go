import { applyMiddleware, combineReducers, createStore, Store } from "redux";

import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { locationsReducer } from "./ProductsReducer";
import { basketReducer } from "./BasketReducer";
import { IBasketState } from "../types/BasketTypes";
import {ILocationState} from "../types/LocationsTypes";
import { productsSaga } from "../sagas/productsSagas";

export interface IApplicationState {
    locations: ILocationState,
    basket: IBasketState
}

export const rootReducer = combineReducers<IApplicationState>({
    locations: locationsReducer,
    basket: basketReducer
});

export function* rootSaga() {
    yield all([
        fork(productsSaga),
        // `fork()` any other store sagas down here...
    ])
}

export default function configureStore(): Store<IApplicationState> {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga)

    return store;
}