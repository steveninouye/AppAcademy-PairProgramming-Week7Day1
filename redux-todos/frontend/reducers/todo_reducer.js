import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

export const todosReducer = (state = {}, action) =>{
  switch(action.type) {
    case RECEIVE_TODOS:
      let dup = {};
      action.todos.forEach((todo, idx) => {
        dup[todo.id] = todo;
      });
      return dup;  // [multiple todos]
    case RECEIVE_TODO:
      const {todo} = action;
      const temp = Object.assign(state, {[todo.id]: todo});
      return Object.assign({}, temp);            // single todo
    case REMOVE_TODO:
      let newDup = Object.assign({}, state);
      delete newDup[action.todo.id];
      return newDup;
    default:
      return state;
  }
};
