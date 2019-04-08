import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Suspense } from 'react';

import ProductsPage from "./ProductsPage";
import Header from  "./Header";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import ContactUsPage from "./ContactUsPage";

// dynamic import with react lazy function
const AdminPage = React.lazy(() => import("./AdminPage"));

const Routes: React.SFC<RouteComponentProps> = (props) => {
    const [loggedIn] = React.useState(true);

    return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={props.location.key}
                                   timeout={500}
                                    classNames="animate">
                        <Switch>
                        <Redirect exact={true} from="/" to="/products"/>
                        <Route path="/products" exact={true} component={ProductsPage} />
                        <Route path="/products/:id" component={ProductPage} />
                        <Route path="/contact" component={ContactUsPage} />
                        <Route path="/admin">
                            { loggedIn ? (
                                <Suspense fallback={<div className="page-container">Loading... </div>}>
                                    <AdminPage /></Suspense>) : <Redirect to="/login" />}
                        </Route>
                        <Route path="/login" component={LoginPage} />
                        <Route component={NotFoundPage}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
    )
};


const RoutesWrap: React.SFC = () => {
    return (
        <Router>
            <Route component={Routes}/>
        </Router>
    )
};

export default RoutesWrap;
