
import React, { Component } from 'react';
import Task from "./task"

class taskBoard extends Component {

    state = {
        header: this.props.value.header,
        task: this.props.value.task
    }

    render() {
        return (
            <div class="card">
                <div class="card-header">
                    <h2>{this.state.header}</h2>
                </div>
                <div class="card-body">
                    <div class="card">
                        {this.state.task.map(e => <Task value={e} />)}
                    </div>
                </div>
            </div>
        );
    }

    handleChange(event) {
        this.setState(
            {
                nombre: event.target.nombre,
                description: event.target.description
            })
    }

    handleSubmit(event) {
        this.setState(
            {
                task: this.state.task.push({
                    nombre: this.event.target.value.nombre,
                    description: this.event.target.valuedescription,
                    createTask: this.createTask
                })
            }
        )
    }

    createTask = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
                </label>
                <label>
                    Descripcion:
                    <input type="text" name="descripcion" value={this.state.description} onChange={this.handleChange} />
                </label>
                <input type="submit" vale="Submit"></input>
            </form>
        );
    }

}

export default taskBoard;