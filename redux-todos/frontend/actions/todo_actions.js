import { fetchTodos, createTodo, deleteTodo, patchTodo } from '../util/fetch_all_todos';
import { receiveErrors, clearErrors } from './error_actions';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const fetchAllTodos = () => (dispatch, getState) => (
  fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createNewTodo = (todo) => (dispatch, getState) => {
  return  createTodo(todo)
  .then(todo => {
    dispatch(clearErrors());
    dispatch(receiveTodo(todo));
  },
  err => dispatch(receiveErrors(err.responseJSON)));
};

export const destroyTodo = (todo) => (dispatch, getState) => {
  return deleteTodo(todo)
  .then(todo => {
    dispatch(removeTodo(todo));
  });
};

export const updateTodo = (todo) => (dispatch, getState) => {
  return patchTodo(todo)
  .then(todo => {
    dispatch(clearErrors());
    dispatch(receiveTodo(todo));
  },
  err => dispatch(receiveErrors(err.responseJSON)));
};
