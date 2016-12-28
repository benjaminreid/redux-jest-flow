// @flow
export const TODO_ADD = 'TODO_ADD';
export const TODO_CLEAR = 'TODO_CLEAR';

export const addTodo = (text: string):Object => ({
  type: TODO_ADD,
  text,
});

export const clearTodos = ():Object => ({
  type: TODO_CLEAR,
});
