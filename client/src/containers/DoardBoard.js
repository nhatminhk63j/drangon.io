import React, { Component } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';
import ListGame from '../components/ListGame/ListGame';

class DoardBoard extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBarMenu />
                        </div>
                        <div className="col-md-9">
                            <ListGame category="Decimal fractions and percentage" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoardBoard;