import React from "react";
import { Link } from 'react-router-dom';
import P from 'prop-types';
import { compose, withStateHandlers } from 'recompose';
import style from '../css/components/AccountModal.css';
import login from '../assets/login1.svg';
import { Toast } from '../jsx/Sweet';

import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/ActionAuthentication';
import _ from 'lodash';

const AccountModal = ({ visible, setVisible, onChangeUsername, onChangePassword, onClickLogin, transaction }) => {

    if (transaction.IsCompleted === false) {
        Toast.fire({
            type: 'warning',
            title: 'Invalid Username or Email!'
        })
    }
    else{
        
    }

    

    return (
        <div className={style.divContainer}>
            <div className={style.divAccountLogo} onClick={() => setVisible(!visible)}>
                <img src={login} />
            </div>
            <div className={visible ? style.showDivAccount : style.hideDivAccount}>
                <div className={style.divRegister}>
                    <div className={style.divClose}>
                        <h5 onClick={() => setVisible(!visible)}>X</h5>
                    </div>
                    <h2>WELCOME TO ROCKTIFY</h2>
                    <h5>Listen to thousand's songs of rock music</h5>
                    <Link to="/register">
                        <button>CREATE AN ACCOUNT</button>
                    </Link>
                </div>
                <div className={style.divLoginContainer}>
                    <div className={style.divCredentials}>
                        <input type='text' placeholder='Username' className='userName' onChange={onChangeUsername} />
                        <input type='password' placeholder='Password' className='password' onChange={onChangePassword} />
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
                        <div className={style.divLogin}>
                            <button className='btnLogin' onClick={() => onClickLogin(transaction)}>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    transaction: state.authentication.transaction
});

export default compose(
    connect(mapStateToProps),
    withStateHandlers(
        ({ initialState = false }) =>
            ({
                visible: initialState,
                username: '',
                password: ''
            }),
        {
            setVisible: () => value => ({
                visible: value
            }),
            onChangeUsername: () => event => ({
                username: event.target.value
            }),
            onChangePassword: () => event => ({
                password: event.target.value
            }),
            onClickLogin: (state, { dispatch }) => () => {
                if (_.isEmpty(state.username) === true && _.isEmpty(state.password) === false) {
                    Toast.fire({
                        type: 'error',
                        title: 'Username is empty!'
                    })
                }
                else if (_.isEmpty(state.password) === true && _.isEmpty(state.username) === false) {
                    Toast.fire({
                        type: 'error',
                        title: 'Password is empty!'
                    })
                }
                else if (_.isEmpty(state.username) === true && _.isEmpty(state.password) === true) {
                    Toast.fire({
                        type: 'error',
                        title: 'Username and Password are empty!'
                    })
                }
                else if (_.isEmpty(state.username) === false && _.isEmpty(state.password) === false) {
                    const data = {
                        Username: state.username,
                        Password: state.password
                    }

                    dispatch(signIn(data));
                }
            }
        })
)(AccountModal)