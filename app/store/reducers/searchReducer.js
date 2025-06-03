import { ADD_SEARCH, REMOVE_SEARCH, SET_SEARCH_ERROR } from "../actions/searchActions";

const initialState = {
  history: [],
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...state, history: [action.payload, ...state.history] };
    case SET_SEARCH_ERROR:
      return { ...state, error: action.payload };
    case REMOVE_SEARCH:
      return {
        ...state,
        history: state.history.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default searchReducer;
