import React, { useState, useEffect } from 'react';
import Input from './components/Input/Input';
import TaskList from './components/TaskList/TaskList';
import { Context } from './Context';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background: transparent;
  width: 30%;
  margin: 30px auto 0;
`

export default function App() {

    const [taskList, setTasks] = useState([]);

    useEffect(() => {
        let raw = localStorage.getItem('taskList');
        if (raw) {
            raw = JSON.parse(raw);
            (raw.length > 0) && setTasks(raw);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    const handleAddTask = task => {
        setTasks([...taskList, {task, done: false}]);
    }

    const handleDeleteTask = index => {
        setTasks(taskList.filter((todo, key) => key !== index));
    }

    const handleChecked = index => {
        const copyTaskList = [...taskList];
        copyTaskList[index].done = !copyTaskList[index].done;
        setTasks(copyTaskList);
    }

    const handleClear = () => setTasks([]);

    return (
        <Context.Provider value={{
            handleChecked, handleDeleteTask
        }}>
            <AppWrapper>
                <Input onAddTask={handleAddTask}/>
                {(taskList.length > 0) && <TaskList
                    taskList={taskList}
                    onClick={handleClear}/>}
            </AppWrapper>
        </Context.Provider>
    );
}

