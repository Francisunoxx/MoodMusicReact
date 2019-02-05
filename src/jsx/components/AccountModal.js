import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { withState, withHandlers } from 'recompose';
import style from '../../css/components/AccountModal.css';
import login from '../../assets/login1.svg';

const AccountModal = ({ visible, setVisible }) => {
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
                        <div className={style.divLogin}>
                            <Link to="/login">
                                <button className='btnLogin'>LOGIN</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withState('visible', 'setVisible', false)(AccountModal)