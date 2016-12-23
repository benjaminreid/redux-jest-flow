import reducer from './todos';
import { addTodo } from './../actions/todos';

describe('todos reducer', () => {

  it('should return an initial state', () => {
    const state = undefined;
    const action = {};
    const expectedState = [];

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should handle addTodo', () => {
    const state = undefined;
    const action = addTodo('Get some milk');
    const expectedState = [
      { text: 'Get some milk' },
    ];

    expect(reducer(state, action)).toEqual(expectedState);
  });

});
