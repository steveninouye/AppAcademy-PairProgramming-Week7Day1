import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form'

const TodoList = ({todos, receiveTodo}) => {
    return (
      <>
      <ul>
      { todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul>

      <TodoForm receiveTodo={receiveTodo} />
      </>
  )
}

export default TodoList;
