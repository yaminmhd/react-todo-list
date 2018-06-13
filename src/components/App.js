import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList
          title="home todos"
          todos={["buy milk", "buy chicken rice", "feed baby"]}
        />
        <TodoList title="work todos" todos={["learn js", "learn react"]} />
      </div>
    );
  }
}

export default App;
