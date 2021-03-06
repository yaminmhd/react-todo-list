import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class TodoCreationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: { name: "", isCompleted: false }
    };
  }

  inputChange = event => {
    this.setState({
      newTodo: {
        name: event.target.value,
        isCompleted: false
      }
    });
  };

  handleSubmit = (newTodo, event) => {
    event.preventDefault();
    this.props.formSubmit(newTodo);
    this.setState({
      newTodo: {
        name: "",
        isCompleted: false
      }
    });
  };

  render() {
    const {
      newTodo,
      newTodo: { name }
    } = this.state;
    return (
      <Form
        onSubmit={event => {
          this.handleSubmit(newTodo, event);
        }}
      >
        <Form.Field>
          <input
            value={name}
            onChange={this.inputChange}
            type="text"
            placeholder="Enter a todo"
          />
        </Form.Field>
        <Button type="submit">Add todo</Button>
      </Form>
    );
  }
}

export default TodoCreationBar;
