import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { Store,  createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import { IApplicationState, rootReducer, rootSaga } from "./reducers/Store";

import './index.css';
import Routes from "./components/Routes";

interface IProps {
    store: Store<IApplicationState>;
}

// const store = configureStore();
//
// ReactDOM.render(<Root store={store}/>, document.getElementById('root') as HTMLElement);

const configureStore = (
   // history: History,
    initialState: IApplicationState
): Store<IApplicationState> => {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({});
    // create the redux-saga middleware
    const sagaMiddleware = createSagaMiddleware();

    // We'll create our store with the combined reducers/sagas, and the initial Redux state that
    // we'll be passing from our entry point.
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    // Don't forget to run the root saga, and return the store object.
    sagaMiddleware.run(rootSaga);

    return store
}
//
// const Root: React.SFC<IProps> = props => {
//     return (
//         <Provider store={props.store}>
//             <Routes />
//         </Provider>
//     )
// };
//
// ReactDOM.render(<Root store={} />, document.getElementById('root') as HTMLElement);