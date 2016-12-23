export const TODO_ADD = 'TODO_ADD';

export const addTodo = (text) => ({
  type: TODO_ADD,
  text,
});
