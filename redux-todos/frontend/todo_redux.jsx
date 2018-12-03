import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Root from './components/root';
import {allTodos} from './reducers/selectors';


window.allTodos = allTodos;
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
