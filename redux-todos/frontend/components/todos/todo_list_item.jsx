import React from 'react'

function TodoListItem({todo, deleteTodo, updateTodo}) {
  const isDone = todo.done ? "Undone" : "Done"
  return (
  <>
    <li>{todo.title}</li>

    <button onClick={ ()=> deleteTodo(todo) }>Delete</button>
    <button onClick={ ()=> updateTodo(todo) } >{isDone}</button>
  </>
)}

export default TodoListItem;
