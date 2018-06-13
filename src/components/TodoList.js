import React from "react";
import Title from "./Title";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <Title name={props.title} />
      <ul>
        {props.todos.map((todo, index) => {
          return <Todo key={index} name={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
