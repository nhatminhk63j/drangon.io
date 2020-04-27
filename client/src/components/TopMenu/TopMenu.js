import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon, faUser } from '@fortawesome/free-solid-svg-icons';
import './TopMenu.scss';
import { getUser, clearUserToken } from '../../auth/userAuth';

class TopMenu extends Component {
    render() {
        return (
            <div className='topmenu'>
                <div className="banner">
                    <img style={{width: '100vw', height: "100px"}} src="https://dragonlearn.in/assets/banners/oct17/brics-math-olymp-test-tour-banner-en-5dae43c87ae1057e211805b08a2ce0f4.svg" alt=""/>
                </div>
                <nav className="navbar navbar-expand-sm navbar-dark topmenu__back">
                    <div className="container">
                        <a className="navbar-brand topmenu__logo" href="/">DrangonLearn.io <FontAwesomeIcon icon={faDragon} /></a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-itredem">
                                    <a className="nav-link topmenu_link" href="/course">My Course <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link topmenu_link" href="/about">Profilio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link topmenu_link" href="/about">About</a>
                                </li>
                            </ul>
                            <div className="my-2 my-lg-0 d-flex user justify-content-center align-items-center">
                                <button className="btn btn-link">Invite friend</button>
                                <div className="dropdown ml-3" style={{cursor: 'pointer'}}>
                                    <div className="d-flex"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="user__name"> {getUser().name} </div>
                                        <FontAwesomeIcon className="user__icon" icon={faUser} />
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Profile</a>
                                        <a className="dropdown-item" href="#" onClick={() => clearUserToken(() => '')}>Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopMenu;