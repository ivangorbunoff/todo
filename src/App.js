import React, {useState, useEffect} from 'react';
import Input from './components/Input/Input';
import TaskList from './components/TaskList/TaskList';

export default function App() {

    const [taskList, setTasks] = useState([]);

    const handleAddTask = task => {
        setTasks([...taskList, {task, done: false}]);
    }

    const handleChecked = index => {
        const bufferTaskList = [...taskList];
        bufferTaskList[index].done = !bufferTaskList[index].done;
        setTasks(bufferTaskList);
    }

    const handleDeleteTask = index => {
        const bufferTaskList = [...taskList];
        bufferTaskList.splice(index, 1);
        setTasks(bufferTaskList);
    }

    const handleClear = () => setTasks([]);

    return (
        <div className="appWrapper">
            <Input onAddTask={handleAddTask}/>
            <TaskList
                taskList={taskList}
                onClear={handleClear}
                onChecked={handleChecked}
                onDeleteTask={handleDeleteTask}/>
        </div>
    );
}

