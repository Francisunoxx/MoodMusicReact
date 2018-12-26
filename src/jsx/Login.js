import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import style from "../css/Login.css";
import Dashboard from './Dashboard';
import Routes from './Routes';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toDashboard: false
        }

        this.loginClick = this.loginClick.bind(this);
    }

    loginClick() {
        //<Link to='/dashboard' component={Dashboard}></Link>
        //this.props.history.push('/dashboard');
        this.setState({ toDashboard: true });
    }

    render() {
        if (this.state.toDashboard === true) {
            return (
                <BrowserRouter history={BrowserRouter}>
                    <Switch>
                        <Route path='/dashboard' component={Dashboard} />
                        <Redirect to='/dashboard' />
                    </Switch>
                </BrowserRouter>
            )
        }

        return (
            <div>
                <button className={style.a} onClick={() => this.loginClick()}>LOGIN</button>
            </div>
        )
    }
}