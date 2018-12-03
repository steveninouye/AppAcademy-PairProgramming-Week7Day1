import {combineReducers} from 'redux';
import {todosReducer} from './todo_reducer';

export default combineReducers({
  todos: todosReducer
});
