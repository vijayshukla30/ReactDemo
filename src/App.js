import React, {Component} from 'react';
import Todo from "./Todo";

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Introduction of ReactJS",
        status: false
      },
      {
        id: 2,
        title: "Installing and Setup ReactJS",
        status: false
      },
      {
        id: 3,
        title: "Demo create-react-app",
        status: false
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
