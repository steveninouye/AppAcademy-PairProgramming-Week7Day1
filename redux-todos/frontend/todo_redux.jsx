import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import App from './components/app';

window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
