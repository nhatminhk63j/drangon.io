import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon, faUser } from '@fortawesome/free-solid-svg-icons'
import './TopMenu.scss'

class TopMenu extends Component {
    render() {
        return (
            <div className='topmenu'>
                <nav className="navbar navbar-expand-sm navbar-dark topmenu__back">
                    <div class="container">
                        <a className="navbar-brand topmenu__logo" href="#">DrangonLearn.io <FontAwesomeIcon icon={faDragon} /></a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                <a className="nav-link topmenu_link" href="#">My Course <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link topmenu_link" href="#">About</a>
                                </li>
                            </ul>
                            <div className="my-2 my-lg-0 d-flex user justify-content-center align-items-center">
                                <div className="user__avatar">
                                    <img className="user__avatar__img" src="https://anhdephd.com/hinh-anh-avatar-chibi-cute-dep-nhat-cho-facebook.html/hinh-anh-avatar-chibi-cute-de-thuong-dep-nhat-cho-facebook-15" width="50px" alt=""/>
                                </div>
                                <div className="user__name">Minh Nhat</div>
                                <FontAwesomeIcon className="user__icon" icon={faUser} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopMenu;