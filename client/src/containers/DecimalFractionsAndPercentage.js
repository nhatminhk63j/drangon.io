import React, { Component } from 'react';
import DoardBoard from './DoardBoard';
import ListGame from '../components/ListGame/ListGame';

const dataGames = [{
    name: "Matching figures and baskets",
    img: 'https://dragonlearn.in/assets/card_previews/india/3341-1b4e1fe5ed429817b448abadbb8828f4.png'
}, {
    name: "Shade the parts according to the fraction",
    img: 'https://dragonlearn.in/assets/card_previews/2304-a02ac19a08939891485896257b5aeee4.png'
}, {
    name: "Matching figures and baskets",
    img: 'https://dragonlearn.in/assets/card_previews/india/3338-e8888f047fdceedc9d3bc59af9da67b6.png'
}, {
    name: "Matching figures and baskets",
    img: 'https://dragonlearn.in/assets/card_previews/india/3340-f4817e14bc729f1cfaad54e7d0582f06.png'
}];

class DecimalFractionsAndPercentage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ListGame category="Decimal fractions and percentage"  />
        );
    }
}

export default DecimalFractionsAndPercentage;