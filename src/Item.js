import React, {Component} from 'react';

class Item extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.status ? 'line-through' : 'none',
      background: "lightgreen",
      padding: "10px",
      borderBottom: '3px black dotted'
    }
  };

  changeStatus(event, id) {
    console.log(event);
    console.log(id);
    this.props.changeStatus()
  };

  render() {
    const {title, id} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.changeStatus.bind(this, id)}/>
        Title: {title}
      </div>
    );
  }
}

export default Item;
