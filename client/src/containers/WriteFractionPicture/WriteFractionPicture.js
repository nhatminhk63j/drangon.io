import React, { Component } from 'react';
import BackgroundGame from '../../components/BackgroundGame/BackgroundGame';
import './WriteFractionPicture.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class WriteFractionPicture extends Component {
    constructor(props){
        super(props);

        this.state = {
            status: 0,
            data: dataFromBackend,
            styleWrongTop: { alert: { display: "none" }, color: { color: "black" }},
            styleWrongBottom: { alert: { display: "none" }, color: { color: "black" } },
            styleBall: [ { left: 2 },{ left: 25}, {left: 50}, {left: 75}, {left: 100} ],
            playButton: true,
            mainGameOpacity: 0.2
        }

        this.doneButtonClick = this.doneButtonClick.bind(this);
    }

    doneButtonClick(){
        const {status, data} = this.state;
        var ts = parseInt(document.getElementById('ts').value);
        var ms = parseInt(document.getElementById('ms').value);
        if(ts !== data[status].ts){
            this.setState({styleWrongTop: {alert: { display: "block"}, color: { color: "red"}}});
        } else {
            this.setState({styleWrongTop: {alert: { display: "none"}, color: { color: "black"}}});
        }
        if(ms !== data[status].ms){
            this.setState({styleWrongBottom: {alert: { display: "block"}, color: { color: "red"}}})
        } else {
            this.setState({styleWrongBottom: {alert: { display: "none"}, color: { color: "black"}}})
        }
        if(ts === data[status].ts && ms === data[status].ms) {
            if(status === 0) this.setState({styleBall: [ { left: 2 },{ left: 25}, {left: 50}, {left: 75}, {right: 2} ]});
            if(status === 1) this.setState({styleBall: [ { left: 2 },{ left: 25}, {left: 50}, {right: 25}, {right: 2} ]});
            if(status === 2) this.setState({styleBall: [ { left: 2 },{ left: 25}, {right: 50}, {right: 25}, {right: 2} ]});
            if(status === 3) this.setState({styleBall: [ { left: 2 },{ right: 75}, {right: 50}, {right: 25}, {right: 2} ]});
            if(status === 4) this.setState({styleBall: [ { right: 100 },{ right: 75}, {right: 50}, {right: 25}, {right: 2} ]});

            this.setState({status: this.state.status + 1});
            document.getElementById('ts').value = "";
            document.getElementById('ms').value = "";
        }

    }

    onClickButtonPlay = () => {
        this.setState({
            playButton: false,
            mainGameOpacity: 1
        })
    }


    render() {
        return (
            <BackgroundGame>
                <div className="game-wrapper">
                    {this.state.playButton && (
                        <div className="play-wrapper">
                            <img onClick={this.onClickButtonPlay} src="https://princessjanaeplace.org/images/2018/06/22/icon_play-button_homepage-carousel_purple.png" alt=""/>
                        </div>
                    )}
                    <div className="game-control">
                        <a href="/courses/parts-and-fractions"><FontAwesomeIcon icon={faAngleLeft} /> Back</a>
                        <div className="game-status">
                            {this.state.styleBall.map(style => {
                                return <div className="ball" style={style}></div>
                            })}
                        </div>
                    </div>

                    <div className="game-complete"  style={this.state.status >= 5 ? {} : {display: "none"}}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 style={{padding: 50}}>You are win!</h1>
                            <img src="https://dragonlearn.in/assets/students/complete-card-21a84b96681981b0362780d2af61cf19.png" height="150px" alt=""/>
                            <button className="btn btn-danger"><a href="/" style={{color: "#fff"}}>Click here to more lession!</a></button>
                        </div>
                    </div>

                    <div className="game-main text-center"  style={this.state.status < 5 ? {opacity: this.state.mainGameOpacity} : {display: "none"}}>
                        
                        <h2>How much of the figure is shaded?</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={ this.state.status < 5 ? this.state.data[this.state.status].img : ''} height="200px" alt=""/> 
                            <div className="d-flex flex-column">
                                <div className="numerator fraction">
                                    <input type="text" id="ts" style={this.state.styleWrongTop.color} autocomplete="off"/>
                                    <div className="alert alert-top" style={this.state.styleWrongTop.alert}>
                                        How many parts are shaded?
                                        <div className="triangle"></div>
                                    </div>
                                </div>
                                <div className="underline">---------</div>
                                <div className="denominator  fraction">
                                    <input type="text" id="ms" style={this.state.styleWrongBottom.color} autocomplete="off"/>
                                    <div className="alert alert-bottom"  style={this.state.styleWrongBottom.alert}>
                                        How many parts is the figure divided into? 
                                        <div className="triangle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={this.doneButtonClick}>Done</button>
                    </div>
                </div>
            </BackgroundGame>
        );
    }
}

const dataFromBackend = [
    {
        img: "https://content.dragonlearn.in/98360/3338/197.svg",
        ts: 3,
        ms: 5
    },
    {
        img: "https://content.dragonlearn.in/98360/3338/100.svg",
        ts: 1,
        ms: 5
    },
    {
        img: "https://content.dragonlearn.in/98360/3338/101.svg",
        ts: 1,
        ms: 5
    },
    {
        img: "https://content.dragonlearn.in/98360/3338/102.svg",
        ts: 1,
        ms: 5
    },
    {
        img: "https://content.dragonlearn.in/98360/3338/103.svg",
        ts: 1,
        ms: 5
    }
]

export default WriteFractionPicture;