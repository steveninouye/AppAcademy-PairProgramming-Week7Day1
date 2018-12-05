import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

export const todosReducer = (state = {}, action) =>{
  let dup = Object.assign({}, state);
  console.log(action);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newTodos = {};
      action.todos.forEach(todo => newTodos[todo.id] = todo);
      return newTodos;
    case RECEIVE_TODO:
      const {todo} = action;
      return Object.assign(dup, {[todo.id]: todo});            // single todo
    case REMOVE_TODO:
      delete dup[action.todo.id];
      return dup;
    default:
      return state;
  }
};
