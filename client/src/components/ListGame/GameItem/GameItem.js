import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './GameItem.scss';

function convertlink(url){
    return '/' + url.toLowerCase().split(' ').join('-');
}

class GameItem extends Component {
    render() {
        return (
            
            <div className="col-md-3 game">
                <a href={convertlink(this.props.name)}>
                    <div className="game__thumnail">
                        <img className="game__thumnail_img" src={this.props.img} alt="game-thumnail" width="100%" />
                        <FontAwesomeIcon className="game__thumnail__icon" icon={faCheckCircle} />
                    </div>
                    <h5 className="game__title"> {this.props.name} </h5>
                </a>
            </div>
        );
    }
}

export default GameItem;