import React, { Component } from 'react';
import BackgroundGame from '../../components/BackgroundGame/BackgroundGame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { DragDropContext } from 'react-beautiful-dnd';
import DropContainer from '../../components/DragAndDrop/DropContainer';

class MatchingFigures extends Component {
    constructor(props){
        super(props);

        this.state = {
            status: 0,
            styleBall: [ { left: 2 },{ left: 25}, {left: 50} ],
            'wrapper': dataFromBackend.map(item => item.id),
            'chau1': [],
            'chau2': [],
            'chau3': [],
            items: dataFromBackend,
            data: dataGame
        }
    }

    onDragEnd = result => {
        const {destination, source, draggableId} = result;
        if(!destination) return ;
        if(destination.droppableId === source.droppableId) return;
        
        const start = [...this.state[source.droppableId]];
        const end = [...this.state[destination.droppableId]];
        
    
        const itemDrag = this.state.items.find(item => item.id === draggableId);
        const chauDrop = this.state.data[destination.droppableId];
        console.log(chauDrop)
    
        if(itemDrag.ts === chauDrop.ts && itemDrag.ms === chauDrop.ms){
          start.splice(source.index, 1);
          end.splice(destination.index, 0, draggableId);
          console.log(end)
          this.setState({[source.droppableId]: start});
          this.setState({[destination.droppableId]: end});
        } else {
          return ;
        }
    }

    render() {
        const wrapperItems = this.state.wrapper.map(item => this.state.items.find(ele => ele.id === item));
        const chau1Items = this.state.chau1.map(item => this.state.items.find(ele => ele.id === item));
        const chau2Items = this.state.chau2.map(item => this.state.items.find(ele => ele.id === item));
        const chau3Items = this.state.chau3.map(item => this.state.items.find(ele => ele.id === item));
        return (
            <BackgroundGame>
                <div className="game-wrapper">
                    <div className="game-control">
                        <a href="/decimal-fractions-and-percentage"><FontAwesomeIcon icon={faAngleLeft} /> Back</a>
                        <div className="game-status">
                            {this.state.styleBall.map((style, index) => {
                                return <div key={index} className="ball" style={style}></div>
                            })}
                        </div>
                    </div>

                    <DragDropContext
                        onDragEnd={this.onDragEnd}
                    >
                        <DropContainer id="wrapper" items={wrapperItems} />
                        <div style={{display: 'flex'}}>
                            <DropContainer id="chau1" isChau={true} items={chau1Items} />
                            <DropContainer id="chau2" isChau={true} items={chau2Items} />
                            <DropContainer id="chau3" isChau={true} items={chau3Items} />
                        </div>
                    </DragDropContext>
                </div>
            </BackgroundGame>
        );
    }
}

const dataGame = {
    'chau1': {
      ts: 1,
      ms: 2
    },
    'chau2': {
      ts: 1,
      ms: 3
    },
    'chau3': {
      ts: 1,
      ms: 4
    }
  }
  
  const dataFromBackend = [
    {
      id: 'a1',
      image: 'https://content.dragonlearn.in/98360/3341/65.svg',
      ts: 1,
      ms: 4
  },
  {
      id: 'a2',
      image: 'https://content.dragonlearn.in/98360/3341/42.svg',
      ts: 1,
      ms: 3
  },
  {
      id: 'a3',
      image: 'https://content.dragonlearn.in/98360/3341/29.svg',
      ts: 1,
      ms: 2
  },
  {
      id: 'a4',
      image: 'https://content.dragonlearn.in/98360/3341/34.svg',
      ts: 1,
      ms: 2
  },
  {
      id: 'a5',
      image: 'https://content.dragonlearn.in/98360/3341/49.svg',
      ts: 1,
      ms: 3
  },
  {
      id: 'a6',
      image: 'https://content.dragonlearn.in/98360/3341/19.svg',
      ts: 1,
      ms: 2
  },
  {
      id: 'a7',
      image: 'https://content.dragonlearn.in/98360/3341/70.svg',
      ts: 1,
      ms: 4
  },
  {
      id: 'a8',
      image: 'https://content.dragonlearn.in/98360/3341/22.svg',
      ts: 1,
      ms: 2
  }
  ]

export default MatchingFigures;