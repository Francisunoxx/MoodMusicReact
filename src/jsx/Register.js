import React, { Component } from 'react';
import style from '../css/Register.css';
import Header from './components/Header';

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

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateInputFields(data) {
        let isValid = false;
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
                errorsCopy[val + 'Error'] = name + ' is required';
                isValid = false;
            }
            else {
                if (val === firstName || val === lastName) {
                    if (data[val].match('^[0-9]$')) {
                        isValid = false;
                        errorsCopy[val + 'Error'] = name + ' should not contain numbers';
                    }
                    else if (data[val].match('[^[!@#$%^&*(),?":{}|<>]$]')) {
                        isValid = false;
                        errorsCopy[val + 'Error'] = name + ' should not contain characters';
                    }
                    else if (data[val].match('[!@#$%^&*(),?":{}|<>0-9]')) {
                        isValid = false;
                        errorsCopy[val + 'Error'] = name + ' should not contain mixed characters';
                    }
                    else {
                        isValid = true;
                        errorsCopy[val + 'Error'] = '';
                    }
                }
                else if (val === userName) {
                    if (data[val].match('[^[!@#$%^&*(),?":{}|<>]$]')) {
                        isValid = false;
                        errorsCopy[val + 'Error'] = name + ' should not contain characters';
                    }
                    else {
                        isValid = true;
                        errorsCopy[val + 'Error'] = '';
                    }
                }
                else if (val === email) {
                    if (!this.validateEmail(data[val])) {
                        isValid = false;
                        errorsCopy[val + 'Error'] = data[val] + ' is not a valid Email';
                    }
                    else {
                        isValid = true;
                        errorsCopy[val + 'Error'] = '';
                    }
                }
                else if (val === password) {
                    if (data[val].length < 5) {
                        isValid = false;
                        errorsCopy[val + 'Error'] = name + ' should be atleast 5 characters';
                    }
                    else {
                        isValid = true;
                        errorsCopy[val + 'Error'] = '';
                    }
                }
                else if (val === confirmPassword) {
                    if (this.state.fields.password != this.state.fields.confirmPassword) {
                        isValid = false;
                        errorsCopy[val + 'Error'] = name + ' should be match with Password';
                    }
                    else {
                        isValid = true;
                        errorsCopy[val + 'Error'] = '';
                    }
                }
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
                                            name='confirmPassword'
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
