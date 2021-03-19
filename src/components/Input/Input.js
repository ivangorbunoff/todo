import React from 'react';
import './Input.css';

class Input extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            enteredTask: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(e) {
        this.setState({
            enteredTask: e.target.value,
        });
    }

    handleClick() {
        const task = this.state.enteredTask;
        if ( task ) {
            this.addTask(task);
        }
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            const task = this.state.enteredTask;
            if ( task ) {
                this.addTask(task);
            }
        }
    }

    addTask(task) {
        this.props.onAddTask(task);
        this.setState({enteredTask: ''});
    }

    render() {
        return (
            <>
                <h1>to-do list</h1>
                <div className="inputWrapper">
                    <input autoFocus={true}
                        type="text"
                        value={this.state.enteredTask}
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}/>
                    <input type="submit" value="ADD" onClick={this.handleClick} />
                </div>
            </>
        );
    }
}

export default Input;