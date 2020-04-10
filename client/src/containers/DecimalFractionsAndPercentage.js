import React, { Component } from 'react';
import ListGame from '../components/ListGame/ListGame';
import DoardBoard from './DoardBoard';

class DecimalFractionsAndPercentage extends Component {
    
    render() {
        return (
            <DoardBoard>
                <ListGame category="Decimal fractions and percentage"/>
            </DoardBoard>
        );
    }
}

export default DecimalFractionsAndPercentage;