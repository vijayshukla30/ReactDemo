import React, {Component, Fragment} from 'react';
import Item from "./Item";
import PropTypes from 'prop-types';

class Todo extends Component {

  state = {
    title: '',
    status: false,
    id: 10
  };

  onchange = (event) => {
    //Controlled
    const name = event.target.name;
    const val = event.target.value;
    this.setState({
      [name]: val
    });
  };

  onSubmit = () => {
    console.log(this.state);
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <Fragment>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" name="title"
                   value={this.state.title} onChange={this.onchange}/>
          </div>
          <button type="button" className="btn btn-primary"
                  onClick={this.onSubmit}>Submit
          </button>
        </form>
        {
          this.props.todos.map((todo) => (
            <Item todo={todo}
                  key={todo.id}
                  changeStatus={this.props.changeStatus}
            />
          ))
        }
      </Fragment>
    );
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  changeStatus: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default Todo;
