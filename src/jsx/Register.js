import React, { Component } from 'react';
import style from '../css/Register.css';
import Header from './components/Header';
import { ifError } from 'assert';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: { firstName: '', lastName: '', userName: '', email: '', password: '', confirmPassword: '' },
            errors: { firstNameError: '', lastNameError: '', userNameError: '', emailError: '', passwordError: '', confirmPasswordError: '' }
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleRegisterButton = this.handleRegisterButton.bind(this);
    }

    validateInputFields(data) {
        let isValid = false;
        let isEmpty = false;
        let hasNumbers = false;
        let hasCharacters = false;
        let errorsCopy = this.state.errors;
        let name = '';
        const firstName = 'firstName';
        const lastName = 'lastName';
        const userName = 'userName';
        const email = 'email';
        const password = 'password';
        const confirmPassword = 'confirmPassword';

        Object.keys(data).forEach((val, index, arr) => {

            switch (val) {
                case firstName:
                    name = 'First Name';
                    break;
                case lastName:
                    name = 'Last Name';
                    break;
                case userName:
                    name = 'User Name';
                    break;
                case email:
                    name = 'Email';
                    break;
                case password:
                    name = 'Password';
                    break;
                case confirmPassword:
                    name = 'Confirm Password';
                    break;
            }

            if (data[val].length == 0) {
                isEmpty = true;
                isValid = false;
            }
            else if (data[val].match('^[0-9]$')) {
                hasNumbers = true;
                isValid = false;
            }
            else if (data[val].match('^[!@#$%^&*(),?":{}|<>]$')) {
                hasCharacters = true;
                isValid = false;
            }
            else if (data[val].match('[!@#$%^&*(),?":{}|<>0-9]')){
                hasNumbers = true;
                hasCharacters = true;
                isValid = false;
            }
            else {
                isValid = true;
            }

            if (isEmpty && !hasNumbers && !hasCharacters) {
                errorsCopy[val + 'Error'] = name + ' is required';
                isEmpty = false;
            }
            else if (!isEmpty && hasNumbers && !hasCharacters) {
                errorsCopy[val + 'Error'] = name + ' should not contain numbers';
                hasNumbers = false;
            }
            else if (!isEmpty && !hasNumbers && hasCharacters) {
                errorsCopy[val + 'Error'] = name + ' should not contain characters';
                hasCharacters = false;
            }
            else if (!isEmpty && hasNumbers && hasCharacters) {
                errorsCopy[val + 'Error'] = name + ' should not contain mixed characters';
                hasNumbers = false;
                hasCharacters = false;
            }
            else {
                errorsCopy[val + 'Error'] = '';
            }

            this.setState({ errors: errorsCopy })
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
        this.validateInputFields(this.state.fields);
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
                                        <h5>{this.state.errors.lastNameError}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={style.divRegisterInputBody}>
                                <div>
                                    <div className={style.divLabel}>
                                        <label>USER NAME</label>
                                    </div>
                                    <div className={style.divInput}>
                                        <input
                                            type='text'
                                            name='userName'
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className={style.divInputError}>
                                        <h5>{this.state.errors.userNameError}</h5>
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
                                        <h5>{this.state.errors.emailError}</h5>
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
                                        <h5>{this.state.errors.passwordError}</h5>
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
                                        <h5>{this.state.errors.confirmPasswordError}</h5>
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