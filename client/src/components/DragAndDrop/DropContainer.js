import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DragContainer from './DragContainer';

class DropContainer extends Component {
    render() {
        return (
            <Droppable
                droppableId={this.props.id}
                direction='horizontal'
            >
                {(provied) => (
                <div
                    ref={provied.innerRef}
                    {...provied.droppableProps}
                    className={this.props.isChau ? "chau" : 'drop-container'}
                >
                    {this.props.items.map((item, index) => (
                    <DragContainer key={item.id} item={item} index={index} />
                    ))}
                    {provied.placeholder}
                </div>
                )}
            </Droppable>
        );
    }
}

export default DropContainer;