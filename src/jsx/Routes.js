import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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