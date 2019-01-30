import React, { Component } from 'react';
import style from '../css/Register.css';
import Header from './components/Header';
import { ifError } from 'assert';

export default class Register extends Component {

    constructor(props) {
        super(props);
        /*firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            userName: '',
            userNameError: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            confirmPasssword: '',
            confirmPassswordError: ''*/
        this.state = {
            fields: { firstName: '', lastName: '', userName: '', email: '', password: '', confirmPasssword: '' },
            errors: { firstNameError: '', lastNameError: '', userNameError: '', emailError: '', passwordError: '', confirmPassswordError: '' }
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleRegisterButton = this.handleRegisterButton.bind(this);
    }

    validateFields(data) {
        let isValid = false;

        Object.keys(data).forEach((val, index, arr) => {
            if(data[val].length == 0){
                isValid = false;
            }
            else{
                isValid = true;
            }

            if(arr.length - 1 == index && isValid == true){
            }
        });

    }

    handleUserInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        let obj = this.state.fields;

        for (const key of Object.keys(obj)) {
            if (name === key) {
                obj[name] = value;
            }
        }

        this.setState({ fields: obj });
    }

    handleRegisterButton(event) {
        event.preventDefault();
        this.validateFields(this.state.fields);
    }

    render() {
        return (
            <div>
                <Header />
                <div className={style.divRegisterContainer}>
                    <div className={style.divRegisterHeader}>
                        <h1>Sign up today, it's free.</h1>
                    </div>
                    <div className={style.divRegisterBody}>
                        <div className={style.divRegisterInput}>
                            <div className={style.divRegisterInputBody}>
                                <div>
                                    <div className={style.divLabel}>
                                        <label>FIRST NAME</label>
                                    </div>
                                    <div className={style.divInput}>
                                        <input
                                            type='text'
                                            name='firstName'
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className={style.divInputError}>
                                        <h5>{this.state.errors.firstNameError}</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={style.divLabel}>
                                        <label>LAST NAME</label>
                                    </div>
                                    <div className={style.divInput}>
                                        <input
                                            type='text'
                                            name='lastName'
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className={style.divInputError}>
                                        <h5></h5>
                                    </div>
                                </div>
                            </div>
                            <div className={style.divRegisterInputBody}>
                                <div>
                                    <div className={style.divLabel}>
                                        <label>USERNAME</label>
                                    </div>
                                    <div className={style.divInput}>
                                        <input
                                            type='text'
                                            name='userName'
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className={style.divInputError}>
                                        <h5></h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={style.divLabel}>
                                        <label>EMAIL</label>
                                    </div>
                                    <div className={style.divInput}>
                                        <input
                                            type='text'
                                            name='email'
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className={style.divInputError}>
                                        <h5></h5>
                                    </div>
                                </div>
                            </div>
                            <div className={style.divRegisterInputBody}>
                                <div>
                                    <div className={style.divLabel}>
                                        <label>PASSWORD</label>
                                    </div>
                                    <div className={style.divInput}>
                                        <input
                                            type='password'
                                            name='password'
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className={style.divInputError}>
                                        <h5></h5>
                                    </div>
                                </div>
                                <div>
                                    <div className={style.divLabel}>
                                        <label>CONFIRM PASSWORD</label>
                                    </div>
                                    <div className={style.divInput}>
                                        <input
                                            type='password'
                                            name='confirmPasssword'
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className={style.divInputError}>
                                        <h5></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.divRegisterButtonBody}>
                            <button onClick={(event) => this.handleRegisterButton(event)}>REGISTER NOW!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}