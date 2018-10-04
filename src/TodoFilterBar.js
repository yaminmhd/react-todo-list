import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react';

class TodoFilterBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      keyword: '',
    }
  }

  handleInputChange = event => {
    this.setState({
      keyword: event.target.value.toLowerCase()
    });
  }

  render() {
    const {keyword} = this.state;
    const {handleFilter, handleViewAllTodos} = this.props;
    return (
      <Form style={{marginBottom: '50px'}}>
        <input
          value={keyword}
          onChange={this.handleInputChange}
          placeholder="Search for todos"
          type="text"
        />
        <Button onClick={(event) => handleFilter(keyword, event)}>Filter</Button>
        <Button onClick={handleViewAllTodos}>See all todos</Button>
      </Form>
    );
  }
}

export default TodoFilterBar;
