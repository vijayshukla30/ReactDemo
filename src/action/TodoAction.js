import dispatcher from '../dispatcher/Dispatcher'

export function createTodo(title) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    title
  })
}

