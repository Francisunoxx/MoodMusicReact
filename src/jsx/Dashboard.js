import React, { Component } from 'react';
import style from '../css/Dashboard.css';
<<<<<<< HEAD
import rock from '../assets/maloik.svg';
import arrowDown from '../assets/sort-down.svg';
import login from '../assets/login1.svg';

export default class Dashboard extends Component {
    render() {
        return (
            <div className={style.divDashboardContainer}>
                <div className={style.divDashboardHeader}>
                    <div className={style.divDashboardImg}>
                        <img src={rock} />
                    </div>
                    <div className={style.divDashboardMenu}>
                        <h4>GENRES</h4>
                        <img src={arrowDown} />
                    </div>
                    <div className={style.divDashboardSearch}>
                        <input placeholder="SEARCH..." />
                    </div>
                    <div className={style.divDashboardLogin}>
                        <img src={login} />
                    </div>
                </div>
=======
import Header from './components/Header';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.divDashboardContainer}>
                <Header />
>>>>>>> 0c68ec88... fixed untracked files
                <div className={style.divDashboardBody}>
                    <div className={style.divMusic}>
                        <div className={style.divRecentlyPlayed}>
                            <h1>FEATURED ARTISTS</h1>
                        </div>
                        <div className={style.divMyPlaylists}>
                            <h1>TOP BANDS</h1>
                        </div>
                        <div className={style.divNewReleases}>
                            <h1>NEW RELEASES</h1>
                        </div>
                    </div>
                    <div className={style.divTopMusic}>
                        <div className={style.divTopMusicBody}>
                            <h1>TOP 10 SONGS</h1>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div className={style.divAccount}>
                    <div className={style.divRegister}>
                        <h2>WELCOME TO ROCKTIFY</h2>
                        <h5>Listen to thousand's songs of rock music</h5>
                        <button>CREATE AN ACCOUNT</button>
                    </div>
                    <div className={style.divLogin}>
                        <div className={style.divCredentials}>
                            <input type='text' placeholder='Username' className='userName' />
                            <input type='password' placeholder='Password' className='password' />
                        </div>
                        <div className={style.divSubmit}>
                            <div className={style.divHelp}>
                                <div className={style.divRememberMe}>
                                    <input type='checkbox' />
                                    <label>Remember me</label>
                                </div>
                                <div className={style.divForgotPassword}>
                                    <label>Forgot your credentials?</label>
                                </div>
                            </div>
                            <button className='btnLogin'>LOGIN</button>
                        </div>
                    </div>
                </div>
=======
>>>>>>> 0c68ec88... fixed untracked files
            </div>
        )
    }
}