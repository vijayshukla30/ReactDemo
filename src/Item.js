import React, {Component} from 'react';

class Item extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.status ? 'line-through' : 'none',
    }
  };

  changeStatus(event, id) {
    this.props.changeStatus()
  };

  render() {
    const {title, id} = this.props.todo;
    return (
      <tr>
        <td>
          <input type="checkbox" onChange={this.props.changeStatus.bind(this, id)}/>
        </td>
        <td>
          <div style={this.getStyle()}>
            {title}
          </div>
        </td>
        <td>
          <button className="btn btn-danger btn-sm">
            Del
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
