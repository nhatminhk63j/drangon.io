import React, { Component } from 'react';
import './Register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { isLogin } from '../../auth/userAuth';
import userApi from '../../api/userApi';
import { Redirect } from 'react-router-dom';
class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            errors: {},
            alertSuccess: false,
            isRegistering: false
        }
    }

    inputOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        this.setState({isRegistering: true});
        const {email, name, password, rePassword} = this.state;
        console.log(this.state)
        var errors = {};
        if(email && password && name && rePassword && password === rePassword){
            // call Api here
            // redirect login page
            userApi.create(JSON.stringify({
                email: email,
                name: name,
                password: password
            })).then(res => {
                if(true){   // if create account succes
                    this.setState({alertSuccess: true});
                    const {history} = this.props;
                    this.setTimeoutId = setTimeout(() => history.push('/'), 500);
                }
                else {
                    //..... 
                }
            })
            return ;
        }
        if(!email) errors.email = "Email is required!";
        else {
            if(email.indexOf('@') < 0) errors.email = "This is not a email!"
        }
        if(!name) errors.name = "Name is required!";
        if(name.length > 30) errors.name = "Name is not longer 30 character!";
        if(!password) errors.password = "Password is required!";
        if(!rePassword) errors.rePassword = "Re-password is required!";
        if(password && rePassword && password !== rePassword) errors.checkPassword = "The re-password must be the same as the above!";
        this.setState({errors: errors, isRegistering: false})
    }

    componentWillUnmount(){
        clearTimeout(this.setTimeoutId);
    }

    render() {
        if(isLogin()) return <Redirect to="/courses/parts-and-fractions" /> ;

        const {errors, email, name, password, rePassword, alertSuccess} = this.state;
        return (
            <div className="register">
                <div className="banner">
                    <img style={{width: '100vw', height: "100px"}} src="https://dragonlearn.in/assets/banners/oct17/brics-math-olymp-test-tour-banner-en-5dae43c87ae1057e211805b08a2ce0f4.svg" alt=""/>
                </div>
                <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <a className="navbar-brand" href="/">DrangonLearn.io <FontAwesomeIcon icon={faDragon} /></a>
                </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h4 className="text-center">Register</h4>
                            <form>
                                
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    {
                                        errors.name ? <span className="alert">* {errors.name} </span> : ''
                                    }
                                    <input type="text" name="name" className="form-control" id="exampleInputName" value={name} onChange={this.inputOnchange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    {
                                        errors.email ? <span className="alert">* {errors.email} </span> : ''
                                    }
                                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={this.inputOnchange} />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    {
                                        errors.password ? <span className="alert">* {errors.password} </span> : ''
                                    }
                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={password} onChange={this.inputOnchange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputRePassword1">Retype password</label>
                                    {
                                        errors.rePassword ? <span className="alert">* {errors.rePassword} </span> : ''
                                    }
                                    {
                                        errors.checkPassword ? <span className="alert">* {errors.checkPassword} </span> : ''
                                    }
                                    <input type="password" name="rePassword" className="form-control" id="exampleInputRePassword1" value={rePassword} onChange={this.inputOnchange} />
                                </div>
                                {this.state.isRegistering && (
                                    <div className="d-flex justify-content-center mt-2 mb-2">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )}
                                <button type="submit" className="btn btn-primary btn-block" onClick={this.register}>Submit</button>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;