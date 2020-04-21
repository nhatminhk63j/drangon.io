import React, { Component} from 'react';

class DropContainer extends Component {
    onDrop = event => {
        event.preventDefault();

        const itemId = event.dataTransfer.getData('item_id');

        const item = document.getElementById(itemId);
        item.style.display = 'block';

        const {items, valueDrop, alive, progress} = this.props;
        
        if(valueDrop.ts === items[itemId].ts && valueDrop.ms === items[itemId].ms){
            document.getElementById(this.props.id).appendChild(item);
            if(progress === 7){
                return this.props.callbackProgress(true);
            } return this.props.callbackProgress(false);
            
        } else {
            
            if(alive === 2) return this.props.callbackHeart([{exist: false}, {exist: true}]);
            else if(alive === 1) return this.props.callbackHeart([{exist: false}, {exist: false}]);
        }
        
    }

    onDragOver = event => {
        event.preventDefault();
    }

    render() {
        
        return (
            <div
                className="drop-item"
                onDrop={this.onDrop}
                onDragOver={this.onDragOver}
            >
                <h3> {this.props.title} </h3>
                <div className="drop-container text-left" id={this.props.id} >
                    {/* {this.props.children} */}
                </div>
            </div>
        );
    }
}

export default DropContainer;