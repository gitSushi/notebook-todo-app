import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";
import { TODO_STATES } from "../../constants";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      let { todoStateId } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            todoStateId,
            todoState: TODO_STATES[todoStateId]
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      let { todoStateId } = action.payload;
      todoStateId = ++todoStateId % TODO_STATES.length;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            todoStateId: todoStateId,
            todoState: TODO_STATES[todoStateId]
          }
        }
      };
    }
    default:
      return state;
  }
}
