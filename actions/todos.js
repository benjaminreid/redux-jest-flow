// @flow
import type { TodoAction } from './../types';

export const TODO_ADD = 'TODO_ADD';
export const TODO_CLEAR = 'TODO_CLEAR';

export const addTodo = (text: string):TodoAction => ({
  type: TODO_ADD,
  text,
});

export const clearTodos = ():TodoAction => ({
  type: TODO_CLEAR,
});
