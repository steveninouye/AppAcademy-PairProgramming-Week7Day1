export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';



export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

const initialState = [
    {id: 3,
    title: 'car',
    body: 'soap',
    done: false},
{
    id: 4,
    title: 'dog',
    body: 'shampoo',
    done: true
  },
];
