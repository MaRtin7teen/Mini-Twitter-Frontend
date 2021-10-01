import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard/Dashboard';

const Routes = () => {
    return (
        <Switch>

            <Route exact path="/">
                <Dashboard />
            </Route>

        </Switch>
    )
}

export default Routes;