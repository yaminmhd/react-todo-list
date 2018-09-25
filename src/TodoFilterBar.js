import React from "react";

const TodoFilterBar = ({
  keyword,
  handleInputChange,
  handleFilter,
  handleViewAllTodos
}) => {
  return (
    <form>
      <input
        value={keyword}
        onChange={handleInputChange}
        placeholder="Search for todos"
        type="text"
      />
      <button onClick={handleFilter}>Filter</button>
      <button onClick={handleViewAllTodos}>See all todos</button>
    </form>
  );
};

export default TodoFilterBar;
