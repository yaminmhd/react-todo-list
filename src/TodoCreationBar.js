import React from 'react';

const TodoCreationBar = ({inputChange, formSubmit, newTodo:{name}}) => {
  return (
    <form onSubmit={formSubmit}>
      <input value={name} onChange={inputChange} type="text" placeholder="Enter a todo"/>
      <button type="submit">Add todo</button>
    </form>
  );
}

export default TodoCreationBar;
