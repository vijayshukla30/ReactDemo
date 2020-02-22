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
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <div className="form-row align-items-center">
                <div className="col-auto">
                  <input type="text" className="form-control" name="title"
                         value={this.state.title} onChange={this.onchange}/>
                </div>
                <div className="col-auto">
                  <button type="button"
                          className="btn btn-primary mb-2"
                          onClick={this.onSubmit}>Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered table-striped">
              <thead>
              <tr>
                <td>Stat</td>
                <td>Item</td>
                <td>Action</td>
              </tr>
              </thead>
              <tbody>
              {
                this.props.todos.map((todo) => (
                  <Item todo={todo} key={todo.id} changeStatus={this.props.changeStatus}/>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>

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
