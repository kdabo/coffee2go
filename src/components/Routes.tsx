import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Suspense } from 'react';

import ProductsPage from "../containers/ProductsPage";
import Header from  "../containers/Header";
import ProductPage from "../containers/ProductPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import ContactUsPage from "./ContactUsPage";
import HomePage from "./HomePageView/HomePageView";

// dynamic import with react lazy function
const AdminPage = React.lazy(() => import("./AdminPage"));


const Routes: React.SFC<RouteComponentProps> = (props) => {
    const [loggedIn] = React.useState(true);

    return (
            <>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={props.location.key}
                                   timeout={500}
                                    classNames="animate">
                        <Switch>
                        <Redirect exact={true} from="/" to="/home"/>
                        <Route path="/home" component={HomePage} />
                        <Route path="/cafes" exact={true} component={ProductsPage} />
                        <Route path="/cafes/:id" component={ProductPage} />
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
            </>
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
