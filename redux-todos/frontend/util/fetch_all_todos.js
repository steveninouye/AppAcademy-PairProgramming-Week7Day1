export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/todos'
  });
};
