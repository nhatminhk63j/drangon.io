import React, { Component } from 'react';
import './DragAndDrop.scss';

class DragContainer extends Component {
    
    onDragStart = event => {
        const target = event.target;
        event.dataTransfer.setData('item_id', target.id);

        setTimeout(() => target.style.display = 'none', 0)
    }

    onDragOver = event => {
        event.stopPropagation();
    }

    onDragEnd = event => {
        event.target.style.display = 'block';
    }

    render() {
        return (
            <div
                className='col-md-3'
            >
                <div 
                    className="drag-item" 
                    id={this.props.id}
                    style={{backgroundImage: 'url(' + this.props.item.image + ')'}}
                    draggable={true}
                    onDragStart={this.onDragStart}
                    onDragOver={this.onDragOver}
                    onDragEnd={this.onDragEnd}
                ></div>
            </div>
        );
    }
}

export default DragContainer;