import {
  TODO_ADD,
  TODO_CLEAR,
  addTodo,
  clearTodos,
} from './todos';

describe('todos actions', () => {

  it('addTodo should create a new todo', () => {
    const text = 'Get some milk';
    const expectedAction = {
      text: text,
      type: TODO_ADD
    };

    expect(addTodo(text)).toEqual(expectedAction);
  });

  it('clearTodos should clear all todos', () => {
    const expectedAction = {
      type: TODO_CLEAR,
    };

    expect(clearTodos()).toEqual(expectedAction);
  });

});
