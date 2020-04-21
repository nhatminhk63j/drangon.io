import React, { Component } from 'react';
import './MatchingFiguresAndPictures.scss'
import BackgroundGame from '../../components/BackgroundGame/BackgroundGame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class MatchingFiguresAndPictures extends Component {
    constructor(props){
        super(props);

        this.state = {
            status: 0,
            data: dataFromBackend,
            styleBall: [ { left: 2 },{ left: 25}, {left: 50}, {left: 75}, {left: 100} ],
            listPicture: {},
            displayMoreValueTrue: false,
            displayNotify: false
        }

    }

    onClickPicture = (e) => {
        const {data, status, listPicture} = this.state;
        var target = e.target;
        if(target.style.backgroundColor === 'rgb(186, 186, 226)' || target.style.backgroundColor === 'rgb(255, 94, 94)'){
            target.style.backgroundColor = '#fff'
            let newState = {...listPicture};
            delete newState[target.id];
            this.setState({listPicture: newState, displayNotify: false, displayMoreValueTrue: false});
        } else {
            target.style.backgroundColor = 'rgb(186, 186, 226)';
            let newState = {...listPicture};
            newState[target.id] = data[status].data.find(item => item.id === target.id);
            this.setState({listPicture: newState, displayNotify: false, displayMoreValueTrue: false});
        }
    }

    doneClick = () => {
        const {listPicture, data, status} = this.state;
        let countResultTrue = 0;
        let inCorrect = 0;
        if(listPicture){
            for(let prop in listPicture){
                if(listPicture[prop].ts === data[status].ts && listPicture[prop].ms === data[status].ms){
                    countResultTrue++;
                } else {
                    document.getElementById(prop).style.backgroundColor = 'rgb(255, 94, 94)';
                    inCorrect++;
                    this.setState({displayNotify: true});
                }
            }
        }
        if(countResultTrue === data[status].numberTrue){
            if(status === 0) this.setState({styleBall: [ { left: 2 },{ left: 25}, {left: 50}, {left: 75}, {right: 2} ]});
            if(status === 1) this.setState({styleBall: [ { left: 2 },{ left: 25}, {left: 50}, {right: 25}, {right: 2} ]});
            if(status === 2) this.setState({styleBall: [ { left: 2 },{ left: 25}, {right: 50}, {right: 25}, {right: 2} ]});
            if(status === 3) this.setState({styleBall: [ { left: 2 },{ right: 75}, {right: 50}, {right: 25}, {right: 2} ]});
            if(status === 4) this.setState({styleBall: [ { right: 100 },{ right: 75}, {right: 50}, {right: 25}, {right: 2} ]});

            for(let prop in listPicture){
                document.getElementById(prop).style.backgroundColor = '#fff';
            }
            this.setState({status: status + 1, listPicture: {}});
        } else if(inCorrect === 0){
            this.setState({displayMoreValueTrue: true});
        }
    }

    render() {
        const {data, styleBall, status, displayMoreValueTrue, displayNotify} = this.state;
        return (
            <BackgroundGame>
                <div className="game-wrapper matching-pictures">
                    <div className="game-control">
                        <a href="/"><FontAwesomeIcon icon={faAngleLeft} /> Back</a>
                        {/* Hien thi thanh trang thai progress bar */}
                        <div className="game-status">
                            {styleBall.map((style, index) => {
                                return <div className="ball" key={index} style={style}></div>
                            })}
                        </div>
                    </div>
                    <div className="game-main text-center"  style={this.state.status < 5 ? {} : {display: "none"}}>
                        <h2>Choose all the shapes that match the fraction</h2>
                        <div className="fraction d-flex align-items-center flex-column">
                            <h2 className="fraction-ts"> {data[status].ts} </h2>
                            <h2> {data[status].ms} </h2>

                            {/* Hien thi thong bao chon lua sai */}
                            <div style={displayNotify ? {display: 'block'} : {display: 'none'}}> 
                                <div className="notify notify-ts text-left">
                                    This is how many <br /> pieces should be shaded
                                    <div class="arrow-left"></div>
                                </div>

                                <div className="notify notify-ms text-left">
                                    There are more<br />matching shapes than that!
                                    <div class="arrow-left"></div>
                                </div>
                            </div>

                            {/* Hien thi thong bao nguoi choi chon thieu dap an */}
                            <div className="displayMorePictureTrue text-left"
                                style={displayMoreValueTrue ? {display: 'block'} : {display: 'none'}}
                            >There are more<br />matching shapes than that!</div>
                        </div>
                        
                        {/* Load du lieu anh tu data backend ra man hinh */}
                        <div className="list-item">
                            {
                                data[status].data.map((item, idx) => (
                                    <div 
                                        className="matching-item"
                                        style={{backgroundImage: 'url(' + item.image + ')'}}
                                        onClick={this.onClickPicture}
                                        id={item.id}
                                        key={idx}
                                    ></div>
                                ))
                            }
                        </div>

                        <button className="btn btn-primary" onClick={this.doneClick}>Done</button>
                    </div>
                    
                </div>
            </BackgroundGame>
        );
    }
}

const dataFromBackend = [
    {
        ts: 5,
        ms: 6,
        numberTrue: 4,
        data: [
            {
                id: 'picture1',
                image: 'https://content.dragonlearn.in/98360/3340/225.svg',
                ts: 5,
                ms: 6
            },
            {
                id: 'picture2',
                image: 'https://content.dragonlearn.in/98360/3340/220.svg',
                ts: 5,
                ms: 6
            },
            {
                id: 'picture3',
                image: 'https://content.dragonlearn.in/98360/3340/212.svg',
                ts: 5,
                ms: 6
            },
            {
                id: 'picture4',
                image: 'https://content.dragonlearn.in/98360/3340/215.svg',
                ts: 5,
                ms: 6
            }
        ]
    },
    {
        ts: 1,
        ms: 6,
        numberTrue: 1,
        data: [
            {
                id: 'picture1',
                image: 'https://content.dragonlearn.in/98360/3340/37.svg',
                ts: 1,
                ms: 3
            },
            {
                id: 'picture2',
                image: 'https://content.dragonlearn.in/98360/3340/119.svg',
                ts: 1,
                ms: 6
            },
            {
                id: 'picture3',
                image: 'https://content.dragonlearn.in/98360/3340/138.svg',
                ts: 2,
                ms: 3
            },
            {
                id: 'picture4',
                image: 'https://content.dragonlearn.in/98360/3340/215.svg',
                ts: 5,
                ms: 6
            }
        ]
    }
]

export default MatchingFiguresAndPictures;