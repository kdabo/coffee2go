import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {Store} from "redux";

import { IApplicationState } from "./reducers/Store";
import configureStore from "./configureStore";
import Routes from "./components/Routes";

import './index.css';
import {GlobalStyle} from "./GlobalStyle";
import theme from './theme'
import { ThemeProvider } from 'styled-components'

interface IProps {
    store: Store<IApplicationState>;
}

const Root: React.SFC<IProps> = props => {
    return (
        <Provider store={props.store}>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </Provider>
    )
};

const initialState = (window as any).initialReduxState as IApplicationState;
const store = configureStore(initialState);

ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement);
