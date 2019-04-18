import { applyMiddleware, combineReducers, createStore, Store } from "redux";

// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

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




import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
// If you use react-router, don't forget to pass in your history type.
import { History } from 'history'

// Import the state interface and our combined reducers/sagas.
//import { ApplicationState, createRootReducer, rootSaga } from './store'

// export default function configureStore(
//     history: History,
//     initialState: ApplicationState
// ): Store<ApplicationState> {
//     // create the composing function for our middlewares
//     const composeEnhancers = composeWithDevTools({})
//     // create the redux-saga middleware
//     const sagaMiddleware = createSagaMiddleware()
//
//     // We'll create our store with the combined reducers/sagas, and the initial Redux state that
//     // we'll be passing from our entry point.
//     const store = createStore(
//         createRootReducer(history),
//         initialState,
//         composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
//     )
//
//     // Don't forget to run the root saga, and return the store object.
//     sagaMiddleware.run(rootSaga)
//     return store
// }
