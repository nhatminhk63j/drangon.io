import React, { Component } from 'react';
import {Draggable} from 'react-beautiful-dnd';
import './DragAndDrop.scss';

class DragContainer extends Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.item.id}
                index={this.props.index}
            >
                {(provied) => (
                <div
                    className="drag-container"
                    ref={provied.innerRef}
                    
                    {...provied.draggableProps}
                >
                    <img
                    {...provied.dragHandleProps}
                    src={this.props.item.image}
                    alt=""
                    />
                </div>
                )}
            </Draggable>
        );
    }
}

export default DragContainer;