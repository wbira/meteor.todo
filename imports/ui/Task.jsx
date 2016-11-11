import React, { Component, PropTypes } from 'react';
import Tasks from '../api/tasks.js';


export default class Task extends Component {
    toggleChecked() {
        Tasks.update(this.props.task._id, {
            $set: { checked: !this.props.task.checked },
        });
    }

    deleteTask() {
        Tasks.remove(this.props.tasks._id);
    }

    render() {
        return (<li>{this.props.task.text}</li>);
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}