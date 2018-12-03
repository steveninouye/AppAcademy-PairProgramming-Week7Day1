import {RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

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
        todo.id = idx + 1;
        dup[todo.id] = todo;
      });
      return dup;  // [multiple todos]
    case RECEIVE_TODO:
      const nextToDoId = Object.keys(state).length + 1;
      action.todo.id = nextToDoId;
      return Object.assign({[nextToDoId]: action.todo}, state);            // single todo
    default:
      return state;
  }
};
