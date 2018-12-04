import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Root from './components/root';
import {allTodos} from './reducers/selectors';
import { fetchAllTodos } from './actions/todo_actions.js';

window.allTodos = allTodos;
window.store = store;
window.fetchAllTodos = fetchAllTodos;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
