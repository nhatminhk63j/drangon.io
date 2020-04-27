import React, { Component } from 'react';
import './SideBarMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';



class SideBarMenu extends Component {
    constructor(props){
        super(props);
    }
    render() {
        
        return (
            <div className="sidebar">
                <a className="direction" href='/'>
                    <FontAwesomeIcon className="back-icon" icon={faAngleLeft} />
                    <span>Back</span>
                </a>
                <ul class="list-group">
                    <a href="/number" 
                        className={this.props.category === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                    >Number</a>
                    <a href="/parts-and-fractions" 
                        className={this.props.category === 2 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                    >Parts and fractions</a>
                    <a href="/decimal-fractions-and-percentage" 
                        className={this.props.category === 3 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                    >Decimal fractions and percentage</a>
                    <a href="/measurement" 
                        className={this.props.category === 4 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                    >Measurement</a>
                    <a href="/data-handling" 
                        className={this.props.category === 5 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                    >Data handling</a>
                    <a href="/secret-lab" 
                        className={this.props.category === 6 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                        style={{
                            backgroundImage: 'url(https://dragonlearn.in/assets/icons/laba-9a059bb2ed9520cc70ef3a7da265cf0a.svg)',
                            backgroundPositionX: 'right',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#e9f9f8'
                        }}
                    >Secret lab</a>
                    
                </ul>
            </div>
        );
    }
}

export default SideBarMenu;