import React from 'react';
import Input from './components/Input/Input';
import TaskList from './components/TaskList/TaskList';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskList: [],
        };
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleAddTask(task) {
        this.setState({
            taskList: this.state.taskList.concat([{task, done: false}]),
        });
    }

    handleChecked(index) {
        const {taskList} = this.state;
        taskList[index].done = !taskList[index].done;
        this.setState({
            taskList: taskList,
        });
    }

    handleDeleteTask(index) {
        const taskList = this.state.taskList.slice();
        taskList.splice(index, 1);
        this.setState({
            taskList: taskList,
        });
    }

    handleClear() {
        this.setState({
            taskList: [],
        });
    }

    render() {
        return (
            <div className="appWrapper">
                <Input onAddTask={this.handleAddTask}/>
                <TaskList
                    taskList={this.state.taskList}
                    onClear={this.handleClear}
                    onChecked={this.handleChecked}
                    onDeleteTask={this.handleDeleteTask}/>
            </div>
        );
    }
}

export default App;
