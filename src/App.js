import React, {Component} from 'react';
import Todo from "./Todo";

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Introduction of Node and NPM",
        status: false,
      },
      {
        id: 2,
        title: "Introduction to all frontend application and their usage",
        status: false,
      },
      {
        id: 3,
        title: "Detail introduction of ReactJS (installation, setup)",
        status: false,
      },
      {
        id: 4,
        title: "Discuss about package.json, index.html",
        status: false,
      },
      {
        id: 5,
        title: "Basic React Component",
        status: false,
      },
      {
        id: 6,
        title: "State and Styling",
        status: false,
      },
      {
        id: 7,
        title: "props and PropTypes and iteration",
        status: false,
      },
      {
        id: 8,
        title: "Function and this binding",
        status: false,
      },
      {
        id: 9,
        title: "Other Stuff",
        status: false,
      }
    ]
  };

  changeStatus = (id) => {
    console.log(id);
    let newTodos = [];

    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      newTodos.push(todo);
    });

    this.setState({
      todos: newTodos
    })
  };

  render() {
    return (
      <div className="App">
        <Todo todos={this.state.todos} changeStatus={this.changeStatus}/>
      </div>
    )
  }
}

export default App;
