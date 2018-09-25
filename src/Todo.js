import React from "react";

const Todo = ({ todo, handleClick }) => {
  const cssToApply = todo.isCompleted ? "done" : "";

  return (
    <li className={cssToApply} onClick={handleClick}>
      {todo.name}
    </li>
  );
};

export default Todo;
