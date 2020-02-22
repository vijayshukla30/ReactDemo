import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";
import Todo from "./Todo";
import TodoStore from "./Store/TodoStore";

class App extends Component {
  state = {
    todos: TodoStore.getAllItem()
  };

  componentDidMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAllItem()
      })
    })
  }

  addTodo = (obj) => {
    console.log(obj);
    let newTodos = this.state.todos;
    newTodos.push(obj);
    console.log(newTodos);

    this.setState({
      todos: newTodos
    });

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
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">ToDoApp</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Todo todos={this.state.todos} changeStatus={this.changeStatus} addTodo={this.addTodo}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
