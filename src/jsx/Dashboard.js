import React, { Component } from 'react';
import style from '../css/Dashboard.css';
import disc from '../assets/compact-disc.svg';
import arrowDown from '../assets/sort-down.svg';
import login from '../assets/keyhole.svg';

export default class Dashboard extends Component {
    render() {
        return (
            <div className={style.divDashboardContainer}>
                <div className={style.divDashboardHeader}>
                    <div className={style.divDashboardImg}>
                        <img src={disc} />
                    </div>
                    <div className={style.divDashboardMenu}>
                        <h4>MOODS</h4>
                        <img src={arrowDown} />
                    </div>
                    <div className={style.divDashboardSearch}>
                        <input placeholder="SEARCH..." />
                    </div>
                    <div className={style.divDashboardLogin}>
                        <img src={login} />
                    </div>
                </div>
                <div className={style.divDashboardBody}>
                    <div className={style.divMusic}>
                        <div className={style.divRecentlyPlayed}>
                            <h1>RECENTLY PLAYED</h1>
                        </div>
                        <div className={style.divMyPlaylists}>
                            <h1>MY PLAYLISTS</h1>
                        </div>
                        <div className={style.divNewReleases}>
                            <h1>NEW RELEASES</h1>
                        </div>
                    </div>
                    <div className={style.divTopMusic}>
                        <h1>TOP 10 SONGS</h1>
                    </div>
                </div>
            </div>
        )
    }
}