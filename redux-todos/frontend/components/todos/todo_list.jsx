import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form'

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <>
      <TodoForm receiveTodo={this.props.receiveTodo} />
      <ul>
        { this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul>
      </>
    )
  }
}

export default TodoList;
