import React, {useState} from 'react';
import './Input.css';

export default function Input({onAddTask}) {

    const [enteredTask, setEnteredTask] = useState('');

    const handleChange = e => {
        setEnteredTask(e.target.value);
    }

    const handleClick = () => {
        if (enteredTask) {
            addTask(enteredTask);
        }
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            if (enteredTask) {
                addTask(enteredTask);
            }
        }
    }

    const addTask = task => {
        onAddTask(task);
        setEnteredTask('');
    }

    return (
        <>
            <h1>to-do list</h1>
            <div className="inputWrapper">
                <input autoFocus={true}
                       type="text"
                       value={enteredTask}
                       onKeyDown={handleKeyDown}
                       onChange={handleChange}/>
                <input type="submit" value="ADD" onClick={handleClick}/>
            </div>
        </>
    );
}
