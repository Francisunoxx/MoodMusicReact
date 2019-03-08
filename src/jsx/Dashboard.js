import React, { Component } from 'react';
import style from '../css/Dashboard.css';
import Header from './components/Header';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import store from '../Store.js';
import { validateEmail } from '../actions/ActionRegister.js';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.validateEmail();
    }

    render() {
        return (
            <Provider store={store}>
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
            </Provider>
        )
    }
}

Dashboard.propTypes = {
    validateEmail: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired
} 

const mapStateToProps = state => ({
    transaction: state.register.transaction
});


export default connect(mapStateToProps, { validateEmail })(Dashboard);