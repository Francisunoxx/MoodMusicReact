import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import style from '../css/Login.css';
import cassete from '../assets/cassete.svg';
import happy_emoji from '../assets/happy_emoji.svg';
import sad_emoji from '../assets/sad_emoji.svg';
import sleepy_emoji from '../assets/sleepy_emoji.svg';
import angry_emoji from '../assets/angry_emoji.svg';
import inlove_emoji from '../assets/inlove_emoji.svg';
import tired_emoji from '../assets/tired_emoji.svg';
import Dashboard from './Dashboard';
import Routes from './Routes';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSpotifyClicked: false,
            toDashboard: false
        }

        this.spotifyClick = this.spotifyClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }

    spotifyClick() {
        this.setState({ isSpotifyClicked: true });
    }

    loginClick() {
        //<Link to='/dashboard' component={Dashboard}></Link>
        //this.props.history.push('/dashboard');
        this.setState({ toDashboard: true });
    }

    render() {
        let a = this.state.isSpotifyClicked ? 'none' : 'flex';
        
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
            <div className={style.divDashboardContainer}>
                <div className={style.divLoginMessage} style={{display: a}}>
                    <h1>Feeling bored?</h1>
                    <h4>Listen to millions of songs based on your mood.</h4>
                    <button onClick={() => this.spotifyClick()}>SIGN IN YOUR SPOTIFY</button>
                </div>
                <div className={style.divLoginContainer} style={{display: this.state.isSpotifyClicked ? 'flex' : 'none'}}>
                    <div className={style.divMoodIcon}>
                        <img src={cassete} />
                    </div>
                    <div className={style.divMoodHeader}>
                        <h3>MOOD MUSIC</h3>
                    </div>
                    <input type='text' placeholder='USERNAME' className='userName' />
                    <input type='password' placeholder='PASSWORD' className='password' />
                    <button className='btnLogin'>LOGIN</button>
                </div>
            </div>
        )
    }
}