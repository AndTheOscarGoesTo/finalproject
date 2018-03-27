import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';
import style from './NewUser.module.scss';
import { post } from '../../services/base'

import UnloggedBanner from '../UnloggedBanner/UnloggedBanner';
import Home from '../Home/Home';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            firstname: '',
            lastnamee: '',
            handle: '',
            email: '',
            password: '',
            passwordconf: '',
            feedbackMessage: '',
        };
    }


    onButtonClick() {
            console.log('making request------')
            post('http://localhost:3000/api/users', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            handle: this.state.handle,
            email: this.state.email,
            password: this.state.password
            })
            .then((results) => {
                console.log('worked maybe')
            })
    }
    handleFirstNameChange(value) {
        this.setState({ firstname: value})
    }
    handleLastNameChange(value) {
        this.setState({ lastname: value})
    }
    
    handleHandleChange(value) {
        this.setState({ handle: value });
    }
    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }
    handlePasswordConfChange(value) {
        this.setState({ passwordconf: value });
    }

    render() {
    
    //    const { from } = this.props.location.state || { from: { pathname: '/' } };
    //    const { redirectToReferrer } = this.state;

    //    if (redirectToReferrer) {
    //        return (
    //            <Redirect to={from} />
    //        );
    //    }

       return (
            <Fragment>
                <UnloggedBanner />
                    <div className={style.text}>
                    <form onSubmit={(e) => this.register(e)}>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input id="firstname" className="form-control" type="text" onChange={(e) => this.handleFirstNameChange(e.target.value)} required /> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input id="lastname" className="form-control" type="text" onChange={(e) => this.handleLastNameChange(e.target.value)} required /> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="handle">Username</label>
                            <input id="handle" className="form-control" type="text" onChange={(e) => this.handleHandleChange(e.target.value)} required /> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required /> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required /> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input id="passwordconf" className="form-control" type="password" onChange={(e) => this.handlePasswordConfChange(e.target.value)} required /> 
                        </div>
                        <button onClick= { (event) => this.onButtonClick()} value="Login" className="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </Fragment>
       );
    }
}

export default Login;