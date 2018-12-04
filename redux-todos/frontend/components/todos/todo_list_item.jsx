import React from 'react'

const TodoListItem = ({todo}) => (
  <>
    <li>{todo.title}</li>
    <button>Delete</button>
  </>
)

export default TodoListItem;
