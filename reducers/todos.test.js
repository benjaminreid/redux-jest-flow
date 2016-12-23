import reducer from './todos';
import { addTodo } from './../actions/todos';

describe('todos reducer', () => {

  it('should return an initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      []
    );
  });

  it('should handle addTodo', () => {
    expect(
      reducer(undefined, addTodo('Get some milk'))
    ).toEqual(
      [{ text: 'Get some milk' }]
    );
  });

});
