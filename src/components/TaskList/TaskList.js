import React from 'react';
import Task from '../Task/Task';
import styled from 'styled-components';

const FieldsWrapper = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
`

const ButtonClear = styled.button`
  display: block;
  margin-left: auto;
  height: 20px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

function TaskList({ taskList, ...props }) {
    return (
        <FieldsWrapper>
            {taskList.map((item, index) => {
                return <Task
                    index={index}
                    key={index}
                    objTask={item}/>;
            })}
            <ButtonClear {...props}>Clear</ButtonClear>
        </FieldsWrapper>
    );
}

export default TaskList;