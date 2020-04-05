import React, { Component } from 'react';
import './BackgroundGame.scss'

class BackgroundGame extends Component {
    render() {
        return (
            <div className="background-game">
                {this.props.children}
            </div>
        );
    }
}

export default BackgroundGame;