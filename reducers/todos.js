import { TODO_ADD } from './../actions/todos';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        {
          text: action.text,
        },
        ...state,
      ];

    default:
      return state;
  }
};

export default reducer;
