import React, { Component } from "react";
import { todos } from "./seedData";
import Todo from "./Todo";
import TodoCreationBar from "./TodoCreationBar";
import TodoFilterBar from "./TodoFilterBar";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      keyword: "",
      filteredTodos: [],
      newTodo: { name: "", isCompleted: false }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleViewAllTodos = this.handleViewAllTodos.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const updatedTodos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos: updatedTodos,
      newTodo: {
        name: "",
        isCompleted: false
      }
    });
  }

  inputChange(event) {
    this.setState({
      newTodo: {
        name: event.target.value,
        isCompleted: false
      }
    });
  }

  handleClick(index) {
    //select the target element using index in a new list
    const newTodoList = [...this.state.todos];
    const elementSelected = newTodoList[index];

    const checkCompletedValue = elementSelected.isCompleted;
    checkCompletedValue
      ? (elementSelected.isCompleted = false)
      : (elementSelected.isCompleted = true);

    this.setState({
      todos: newTodoList
    });
  }

  handleFilter(event) {
    event.preventDefault();
    const { keyword, todos } = this.state;
    const filteredTodos = todos.filter(todo => {
      const name = todo.name.toLowerCase();
      return name.indexOf(keyword) > -1;
    });
    this.setState({
      filteredTodos
    });
    return filteredTodos;
  }

  handleInputChange(event) {
    this.setState({
      keyword: event.target.value.toLowerCase()
    });
  }

  handleViewAllTodos(event) {
    event.preventDefault();
    this.setState({
      filteredTodos: []
    });
  }

  render() {
    const { todos, filteredTodos } = this.state;
    const verifyWhichTodoListToMap =
      filteredTodos.length > 0 ? filteredTodos : todos;
    const mapTodos = verifyWhichTodoListToMap.map((todo, index) => {
      return (
        <Todo
          key={index}
          todo={todo}
          handleClick={() => this.handleClick(index)}
        />
      );
    });
    return (
      <div>
        <TodoFilterBar
          keyword={this.state.keyword}
          handleInputChange={this.handleInputChange}
          handleFilter={this.handleFilter}
          handleViewAllTodos={this.handleViewAllTodos}
        />
        <TodoCreationBar
          inputChange={this.inputChange}
          formSubmit={this.handleSubmit}
          newTodo={this.state.newTodo}
        />
        <ul>{mapTodos}</ul>
      </div>
    );
  }
}

export default TodoList;
