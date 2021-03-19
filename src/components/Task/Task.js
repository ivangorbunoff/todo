import React from 'react';
import './Task.css';

function Task({index, ...props}) {

    const {task, done} = props.objTask;

    return (
        <div className="field">
            <input type="checkbox" checked={done} onChange={() => props.onChecked(index)}/>
            <p className="task">{task} {props.index}</p>
            <button className="deleteBtn"
                    onClick={() => props.onDeleteTask(index)}>
                Delete
            </button>
        </div>
    );
}

export default Task;