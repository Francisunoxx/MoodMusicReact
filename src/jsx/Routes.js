import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Register from './Register';
import { Provider, connect } from 'react-redux';
import store from '../Store.js';

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Routes
