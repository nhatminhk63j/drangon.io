import React, { Component } from 'react';
import './ListGame.scss';
import GameItem from './GameItem/GameItem';
import { BrowserRouter } from 'react-router-dom';

class ListGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            games: [{
                name: "Matching figures and baskets",
                img: 'https://dragonlearn.in/assets/card_previews/india/3341-1b4e1fe5ed429817b448abadbb8828f4.png'
            }, {
                name: "Shade the parts according to the fraction",
                img: 'https://dragonlearn.in/assets/card_previews/2304-a02ac19a08939891485896257b5aeee4.png'
            }, {
                name: "Write the fraction according to the picture",
                img: 'https://dragonlearn.in/assets/card_previews/india/3338-e8888f047fdceedc9d3bc59af9da67b6.png'
            }, {
                name: "Matching figures and pictures",
                img: 'https://dragonlearn.in/assets/card_previews/india/3340-f4817e14bc729f1cfaad54e7d0582f06.png'
            },
            {
                name: "Equal fractions",
                img: 'https://dragonlearn.in/assets/card_previews/2393-5539325521c4c6f705f3b73da8979b58.png'
            }
        ]

        }
    }
    render() {
        return (
            <BrowserRouter>
                <div className="text-center listgame">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/">Courses</a></li>
                        <li className="breadcrumb-item active" aria-current="page" style={{textTransform: 'capitalize'}}>
                            {window.location.pathname.split('/').slice(2).join('').split('-').join(' ')}
                        </li>
                        </ol>
                    </nav>
                    <h4>{this.props.category}</h4>
                    <div className="row">
                        {this.state.games.map(game => {
                            return <GameItem name={game.name} img={game.img} />;
                        })}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default ListGame;

