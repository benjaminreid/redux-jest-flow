// @flow
import type { TodoAction } from './../types';
import { TODO_ADD, TODO_CLEAR } from './../actions/todos';

const initialState = [];

const reducer = (state: Array<Object> = initialState, action: TodoAction):Array<Object> => {
  switch (action.type) {
    case TODO_ADD:
      return [
        {
          text: action.text,
        },
        ...state,
      ];

    case TODO_CLEAR:
      return [];

    default:
      return state;
  }
};

export default reducer;
