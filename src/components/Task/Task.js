import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';

const StyledTask = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 30px;
  margin-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid #38473c;

  input {
    margin: 0 5px;
    cursor: pointer;
    &:checked + p {
      text-decoration: line-through;
    }
  }

  p {
    overflow: auto;
  }
`

const DeleteBtn = styled.button`
  margin-left: auto;
  cursor: pointer;
  border: none;
  outline: none;
  color: brown;
`

function Task({ index, ...props }) {

    const { task, done } = props.objTask;

    const { handleChecked, handleDeleteTask } = useContext(Context);

    return (
        <StyledTask>
            <input type="checkbox" checked={done} onChange={() => handleChecked(index)}/>
            <p>{task}</p>
            <DeleteBtn onClick={() => handleDeleteTask(index)}>
                Delete
            </DeleteBtn>
        </StyledTask>
    );
}

export default Task;