import TodoList from './todo_list';
import {connect} from 'react-redux';
import {receiveTodo, fetchAllTodos} from '../../actions/todo_actions';

const MapStateToProps = state => ({
  todos: allTodos(state)
});

const MapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchAllTodos())
});


export default connect(MapStateToProps, MapDispatchToProps)(TodoList)
