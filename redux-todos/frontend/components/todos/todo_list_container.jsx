import TodoList from './todo_list';
import {connect} from 'react-redux';
import {createNewTodo, fetchAllTodos, destroyTodo, updateTodo } from '../../actions/todo_actions';
import {allTodos} from '../../reducers/selectors';

const MapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const MapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createNewTodo(todo)),
  fetchTodos: () => dispatch(fetchAllTodos()),
  deleteTodo: (todo) => dispatch(destroyTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});


export default connect(MapStateToProps, MapDispatchToProps)(TodoList);
