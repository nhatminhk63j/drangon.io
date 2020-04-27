import React, { Component } from 'react';
import './BackgroundGame.scss'

class BackgroundGame extends Component {
    render() {
        return (
            <div className="background-game">
                <div className="bg-cell"></div>
                <div className="bg-color"></div>
                <div className="bg-stuff"></div>
                <img src="https://content.dragonlearn.in/fp/97/fat_player/student/grad-f07e854ce64f9aee2db7bd67146ff0e4800feeed40c8f7116fcb3b6a048deb64.jpg" alt="" className="bg-color"/>
                {this.props.children}
            </div>
        );
    }
}

export default BackgroundGame;