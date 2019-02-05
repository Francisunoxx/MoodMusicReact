import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Login from './Login';
import Dashboard from './Dashboard';
import AuthenticatedRoutes from './AuthenticatedRoutes';


export default () =>
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
=======
import Dashboard from './Dashboard';
import Register from './Register';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Register} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}
>>>>>>> 0c68ec88... fixed untracked files
