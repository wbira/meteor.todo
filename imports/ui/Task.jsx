import React, { Component, PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
    toggleChecked() {
        Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
    }

    deleteTask() {
        Meteor.call('tasks.remove', this.props.task._id);
    }

    render() {
        const className = this.props.task.checked ? 'checked' : ''
        return (
            <li className={className}>
                <button className="delete"
                    onClick={this.deleteTask.bind(this)}>
                    &times;
                </button>
                <input type="checkbox"
                    readOnly
                    checked={this.props.task.checked}
                    onClick={this.toggleChecked.bind(this)} />
                <span className="text">
                    <strong>{this.props.task.username}</strong> : {this.props.task.text}
                </span>
            </li>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}