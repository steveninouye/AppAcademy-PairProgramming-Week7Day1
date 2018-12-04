import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form'

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    let errors = this.props.errors
    return (
      <>
      {errors.map((err,i) => <p key={i}>{err}</p>)}
      <TodoForm createTodo={this.props.createTodo} />
      <ul>
        { this.props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul>
      </>
    )
  }
}

export default TodoList;
