import React, { Component } from 'react';

class Task extends Component {


    state = {
        nombre: this.props.value.nombre,
        description: this.props.value.description,
        createTask: this.props.value.createTask
    }

    render() {
        return (
            <div>
                <div class="card-header">
                    <h3>{this.state.header}</h3>
                </div>
                <div class="card-body">
                    <p>{this.state.nombre}</p>
                </div>
                <div class="card-footer">
                    <button onClick={this.state.createTask}> Create Task
                    </button>
                </div>
            </div>
        );
    }

}

export default Task;