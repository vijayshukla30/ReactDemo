import React, {Component, Fragment} from 'react';
import Todo from "./Todo";
import TodoStore from "./Store/TodoStore";
import * as TodoActions from './action/TodoAction';

class Home extends Component {
  state = {
    todos: TodoStore.getAllItem()
  };

  componentDidMount() {
    TodoStore.on("change", this.getTodos);
    console.log("count", TodoStore.listenerCount("change"));
  }

  getTodos = () => {
    this.setState({
      todos: TodoStore.getAllItem()
    })
  };

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos)
  }

  addTodo = (title) => {
    TodoActions.createTodo(title)
  };

  changeStatus = (id) => {
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
        <Todo todos={this.state.todos} changeStatus={this.changeStatus} addTodo={this.addTodo}/>
      </Fragment>
    );
  }
}

export default Home;
