import React, { Component } from 'react';
import BackgroundGame from '../../components/BackgroundGame/BackgroundGame';
import './WriteFractionPicture.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class WriteFractionPicture extends Component {
    render() {
        return (
            <BackgroundGame>
                <div className="game-wrapper">
                    <div className="game-control">
                        <a href="/decimal-fractions-and-percentage"><FontAwesomeIcon icon={faAngleLeft} /> Back</a>
                        <div className="game-status">
                            <div className="ball" style={{left: "2px"}}></div>
                            <div className="ball" style={{left: "25px"}}></div>
                        </div>
                    </div>
                    <div className="game-main text-center">
                        <h2>How much of the figure is shaded?</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="https://content.dragonlearn.in/98360/3338/197.svg" height="200px" alt=""/>
                            <div className="d-flex flex-column">
                                <input type="text"/>
                                <div className="underline">---------</div>
                                <input type="text"/>
                            </div>
                        </div>
                        <button className="btn btn-primary">Done</button>
                    </div>
                </div>
            </BackgroundGame>
        );
    }
}

export default WriteFractionPicture;