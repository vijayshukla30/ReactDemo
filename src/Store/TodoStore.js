import {EventEmitter} from 'events';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
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
  }

  createTodo(title) {
    const id = Date.now();
    this.todos.push({
      id,
      title,
      status: false
    });

    this.emit("change");
  }

  getAllItem() {
    return this.todos;
  }
}

const todoStore = new TodoStore;
window.todoStore = todoStore;
export default todoStore;
