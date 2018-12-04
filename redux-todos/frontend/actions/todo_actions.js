import { fetchTodos, createTodo } from '../util/fetch_all_todos';
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

export const createNewTodo = (todo) => (dispatch, getState) =>{
  console.log(todo);
  return  createTodo(todo).then(todo => dispatch(receiveTodo(todo)));
};

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.fetchAllTodos = fetchAllTodos;
