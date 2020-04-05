import React, { Component } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';

class DoardBoard extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                <div className="container d-flex">
                    <SideBarMenu />
                </div>
            </div>
        );
    }
}

export default DoardBoard;