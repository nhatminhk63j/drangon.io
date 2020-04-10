import React, { Component } from 'react';
import './SideBarMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';



class SideBarMenu extends Component {
    render() {
        return (
                <div className="sidebar">
                    <h5><FontAwesomeIcon icon={faGraduationCap} /> My courses </h5> 
                    <nav className="navbar">
                        <ul className="sidebar__menu text-left nav navbar-nav">
                            <li className="nav-item">
                                <a className="sidebar__link" href="/number">Numbers</a>
                            </li>
                            <li className="nav-item">
                                <a className="sidebar__link" href="/fractions">Fractions</a>
                            </li>
                            <li className="nav-item">
                                <a className="sidebar__link active" href="/decimal-fractions-and-percentage">Decimal fractions and percentage</a>
                            </li>
                            <li className="nav-item">
                                <a className="sidebar__link" href="/measurement">Measurement</a>
                            </li>
                            <li className="nav-item">
                                <a className="sidebar__link" href="/data-handing">Data handing</a>
                            </li>
                        </ul>
                    </nav>
                </div>
        );
    }
}

export default SideBarMenu;