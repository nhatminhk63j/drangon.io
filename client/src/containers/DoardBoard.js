import React, { Component } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';

class DoardBoard extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DoardBoard;