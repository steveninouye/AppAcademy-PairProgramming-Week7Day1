import TodoList from './todo_list';
import {connect} from 'react-redux';
import {createNewTodo, fetchAllTodos} from '../../actions/todo_actions';
import {allTodos} from '../../reducers/selectors';

const MapStateToProps = state => ({
  todos: allTodos(state)
});

const MapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createNewTodo(todo)),
  fetchTodos: () => dispatch(fetchAllTodos())
});


export default connect(MapStateToProps, MapDispatchToProps)(TodoList);
