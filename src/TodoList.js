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

  addNewTodo = (todo) => {
    const updatedTodos = [...this.state.todos, todo];
    this.setState({
      todos: updatedTodos
    });
  };

  toggleTaskStatus = index => {
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

  filterTodo = (keyword, event) => {
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
          handleClick={this.toggleTaskStatus}
        />
      );
    });

    return (
      <Container text style={{ marginTop: "50px" }}>
        <Header as="h2">My Todo List</Header>
        <div>
          <TodoFilterBar
            handleFilter={this.filterTodo}
            handleViewAllTodos={this.handleViewAllTodos}
          />
          <TodoCreationBar formSubmit={this.addNewTodo} />
          <List>{mapTodos}</List>
        </div>
      </Container>
    );
  }
}

export default TodoList;
