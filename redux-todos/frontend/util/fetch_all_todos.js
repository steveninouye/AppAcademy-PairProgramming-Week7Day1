export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/todos'
  });
};

export const createTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/todos',
    data: {
      todo: {
        title: todo.title,
        body: todo.body,
        done: todo.done
      }
    }
  })
);

export const deleteTodo = (todo) => (
  $.ajax({
    method: 'DELETE',
    url: `http://localhost:3000/api/todos/${todo.id}`
  })
);

export const patchTodo = (todo) => (
  $.ajax({
    method: 'PATCH',
    url: `http://localhost:3000/api/todos/${todo.id}`,
    data: {
      todo: {
        done: !todo.done
      }
    }
  })
)
