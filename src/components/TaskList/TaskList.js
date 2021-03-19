import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

function TaskList(props) {
    return (
        <div className="fieldsWrapper">
            {props.taskList.map((item, index) => {
                return <Task
                    index={index}
                    key={index}
                    objTask={item}
                    onChecked={props.onChecked}
                    onDeleteTask={props.onDeleteTask}/>;
            })}
            <button className="clear" onClick={props.onClear}>Clear</button>
        </div>
    );
}

export default TaskList;