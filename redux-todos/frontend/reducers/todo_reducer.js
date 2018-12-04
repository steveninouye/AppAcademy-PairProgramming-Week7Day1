import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export const todosReducer = (state = initialState, action) =>{
  switch(action.type) {
    case RECEIVE_TODOS:
      let dup = {};
      action.todo.forEach((todo, idx) => {
        dup[todo.id] = todo;
      });
      return dup;  // [multiple todos]
    case RECEIVE_TODO:
      const {todo} = action;
      return Object.assign({[todo.id]: todo}, state);            // single todo
    case REMOVE_TODO:
      let newDup = Object.assign({}, state);
      delete newDup[action.todo.id];
      return newDup;
    default:
      return state;
  }
};
