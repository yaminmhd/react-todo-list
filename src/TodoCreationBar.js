import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react';

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

  render() {
    const { formSubmit } = this.props;
    const {
      newTodo,
      newTodo: { name }
    } = this.state;
    return (
      <Form
        onSubmit={event => {
          formSubmit(newTodo, event);
          this.setState({
            newTodo: {
              name: "",
              isCompleted: false
            }
          });
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
