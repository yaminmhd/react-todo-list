# Lab: React Todo List

It's time to practice what you've learnt about React! 

### Instructions

Getting started
  - Fork the repo
  - Clone the repo
  - `cd` into the directory and run `npm install`
  - Run tests: `npm test`
  - Start application: `npm start` and go to `localhost:3000` in your browser

Tasks
  - Note: for each task, write tests for each component/functionality!
  - Create the following components:
    - TodoList
      - import the todos defined in seedData.js and set it in TodoList's state
    - Todo
      - Allow user to mark a Todo as done by clicking on it
      - Add strikethrough style to a Todo when user marks it as done
    - TodoCreationBar
      - Allow user to add a todo by inputting a string and hitting a 'Add todo' button

Bonus tasks:
Create a TodoFilterBar component which:
      - allows the user to filter todos by inputting a search string and hitting a 'Filter' button. Todos that do not match the search string should be hidden from display
      - allows the user to see all Todos again when he hits a 'See all todos' button
