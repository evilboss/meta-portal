import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import {LandingPage} from "../pages";
import history from "../utils/history";

export const AppRouter = () => (
    <Router history={history}>
        <Switch>

            <Route exact path="/">
                <LandingPage/>
            </Route>


        </Switch>
    </Router>
);
