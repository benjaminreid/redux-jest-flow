// @flow
import type { TodoAction, PlainAction } from './../types';

export const TODO_ADD = 'TODO_ADD';
export const TODO_CLEAR = 'TODO_CLEAR';

export const addTodo = (text: string):TodoAction => ({
  type: TODO_ADD,
  text,
});

export const clearTodos = ():PlainAction => ({
  type: TODO_CLEAR,
});
