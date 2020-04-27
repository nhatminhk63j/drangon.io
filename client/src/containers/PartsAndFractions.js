import React, { Component } from 'react';
import ListGame from '../components/ListGame/ListGame';
import DoardBoard from './DoardBoard';
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';

class PartsAndFractions extends Component {
    
    render() {
        return (
            <DoardBoard>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBarMenu category={2} />
                        </div>
                        <div className="col-md-9">
                            <ListGame category="Parts and fractions"/>
                        </div>
                    </div>
                </div>
            </DoardBoard>
        );
    }
}

export default PartsAndFractions;