export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
};

export const createTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: '/api/todos',
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
    url: `/api/todos/${todo.id}`
  })
);

export const patchTodo = (todo) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: {
      todo: {
        done: !todo.done
      }
    }
  })
)
