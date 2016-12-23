import {
  TODO_ADD,
  addTodo,
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

});
