import React, { Component } from "react";
import style from "../css/Dashboard.css";
import Header from "../components/Header";
import PropTypes from 'prop-types';

export default class Dashboard extends Component {

    /*constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        //this.props.validateEmail();
    }

    render() {
        return (
            <div className={style.divDashboardContainer}>
                <Header />
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
            </div>
        )
    }
}

// Dashboard.propTypes = {
//     validateEmail: PropTypes.func.isRequired,
//     transaction: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//     transaction: state.register.transaction
// });
//connect(mapStateToProps, { validateEmail })

