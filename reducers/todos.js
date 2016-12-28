// @flow
import type { TodoAction, PlainAction } from './../types';
import { TODO_ADD, TODO_CLEAR } from './../actions/todos';

const initialState = [];

const reducer = (state: Array<Object> = initialState, action: TodoAction|PlainAction):Array<Object> => {
  switch (action.type) {
    case TODO_ADD:
      if (action.text) {
        return [
          {
            text: action.text,
          },
          ...state,
        ];
      }
      return [...state];

    case TODO_CLEAR:
      return [];

    default:
      return state;
  }
};

export default reducer;
