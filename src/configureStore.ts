import { Store, createStore, applyMiddleware } from 'redux'
import  createSagaMiddleware  from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { IApplicationState, createRootReducer, rootSaga } from "./reducers/Store";

export default function configureStore(
    initialState: IApplicationState
): Store<IApplicationState> {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        createRootReducer(),
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    return store
}
