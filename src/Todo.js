import React from "react";
import {List} from 'semantic-ui-react'

const Todo = ({ todo:{name, isCompleted}, handleClick, index }) => {

  const cssToApply = isCompleted ? "done" : "";

  return (
    <List.Item className={cssToApply} onClick={() => handleClick(index)} icon={'angle right'} content={name}/>
  );
};

export default Todo;
