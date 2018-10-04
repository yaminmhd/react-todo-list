import React, { Component } from "react";
import { todos } from "./seedData";
import Todo from "./Todo";
import TodoCreationBar from "./TodoCreationBar";
import TodoFilterBar from "./TodoFilterBar";
import { Container, Header, List } from "semantic-ui-react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      filteredTodos: []
    };
  }

  handleSubmit = (todo, event) => {
    event.preventDefault();
    console.log(todo);
    const updatedTodos = [...this.state.todos, todo];
    this.setState({
      todos: updatedTodos
    });
  };

  handleClick = index => {
    const updatedTodoList = [...this.state.todos];
    const filterClone = [...this.state.filteredTodos];
    if (filterClone.length > 0) {
      filterClone[index].isCompleted = !filterClone[index].isCompleted;
    }
    updatedTodoList[index].isCompleted = !updatedTodoList[index].isCompleted;
    this.setState({
      todos: updatedTodoList,
      filteredTodos: filterClone
    });
  };

  handleFilter = (keyword, event) => {
    event.preventDefault();
    const { todos } = this.state;
    const filteredTodos = todos.filter(todo => {
      return todo.name.toLowerCase().includes(keyword);
    });
    this.setState({
      filteredTodos
    });
  };

  handleViewAllTodos = event => {
    event.preventDefault();
    this.setState({
      filteredTodos: []
    });
  };

  render() {
    const { todos, filteredTodos } = this.state;
    const verifyWhichTodoToMap =
      filteredTodos.length > 0 ? filteredTodos : todos;
    const mapTodos = verifyWhichTodoToMap.map((todo, index) => {
      return (
        <Todo
          key={index}
          index={index}
          todo={todo}
          handleClick={this.handleClick}
        />
      );
    });

    return (
      <Container text style={{ marginTop: "50px" }}>
        <Header as="h2">My Todo List</Header>
        <div>
          <TodoFilterBar
            handleFilter={this.handleFilter}
            handleViewAllTodos={this.handleViewAllTodos}
          />
          <TodoCreationBar formSubmit={this.handleSubmit} />
          <List>{mapTodos}</List>
        </div>
      </Container>
    );
  }
}

export default TodoList;
