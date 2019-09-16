import React, { Component } from 'react';
import taskBoard from './taskboard';

class Board extends Component {

    state = {
        task: [
            {
                header: "To go",
                task: {}
            },
            {
                header: "Doing",
                task: {}
            },
            {
                header: "Done",
                task: {}
            }
        ]
    }

    render() {
        return (
            <div class="card-group">
                {this.state.task.map(e => <taskBoard value={e} />)}
            </div>
        );
    }
}

export default Board;