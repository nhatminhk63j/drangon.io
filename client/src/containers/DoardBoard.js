import React, { Component } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import SideBarMenu from '../components/SideBarMenu/SideBarMenu';

class DoardBoard extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <SideBarMenu />
                        </div>
                        <div className="col-md-7">
                        {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoardBoard;