// @flow
export const TODO_ADD = 'TODO_ADD';

export const addTodo = (text: string):Object => ({
  type: TODO_ADD,
  text,
});
