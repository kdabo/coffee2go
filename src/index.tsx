import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore from "./reducers/Store";

import { IApplicationState } from "./reducers/Store";

import './index.css';
import Routes from "./components/Routes";

interface IProps {
    store: Store<IApplicationState>;
}

const Root: React.SFC<IProps> = props => {
    return (
        <Provider store={props.store}>
            <Routes />
        </Provider>
    )
};

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root') as HTMLElement);

