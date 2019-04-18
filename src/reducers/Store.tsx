import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";

import { all, fork } from 'redux-saga/effects'

import { productsReducer } from "./ProductsReducer";
import { IProductsState } from "../types/ProductsTypes";
import { basketReducer } from "./BasketReducer";
import { IBasketState } from "../types/BasketTypes";

import {productsSaga} from "../sagas/productsSagas";

export interface IApplicationState {
    products: IProductsState,
    basket: IBasketState
}

export const rootReducer = combineReducers<IApplicationState>({
    products: productsReducer,
    basket: basketReducer
});

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}


export function* rootSaga() {
    yield all([
        fork(productsSaga),
        // `fork()` any other store sagas down here...
    ])
}