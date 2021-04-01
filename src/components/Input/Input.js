import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-content: stretch;
`

const Title = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`

const StyledInput = styled.input.attrs(props => ({
    type: "text"
}))`
  font-family: inherit;

  ${props => props.type === 'text' && css`
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    color: #38473c;
    font-size: 18px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  `}
  
  ${props => props.type === 'submit' && css`
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `}
`

const SubmitInput = styled(StyledInput).attrs({
    type: "submit",
    value: "ADD"
})``;

export default function Input({ onAddTask }) {

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
            <Title>to-do list</Title>
            <InputWrapper>
                <StyledInput autoFocus={true}
                       value={enteredTask}
                       onKeyDown={handleKeyDown}
                       onChange={handleChange}/>
                <SubmitInput onClick={handleClick}/>
            </InputWrapper>
        </>
    );
}
