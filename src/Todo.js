import React, {Component} from 'react';
import Item from "./Item";

class Todo extends Component {

  state = {
    name: "Vijay Kumar Shukla"
  };

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h3>My Name is {this.state.name}.</h3>
        {
          this.props.todos.map((todo) => (
            <Item todo={todo} key={todo.id} changeStatus={this.props.changeStatus}/>
          ))
        }
      </div>
    );
  }
}

export default Todo;
