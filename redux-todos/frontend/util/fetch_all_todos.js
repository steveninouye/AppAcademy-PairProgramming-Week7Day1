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
