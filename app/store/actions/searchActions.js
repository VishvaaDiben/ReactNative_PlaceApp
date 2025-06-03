export const ADD_SEARCH = "ADD_SEARCH";
export const SET_SEARCH_ERROR = "SET_SEARCH_ERROR";
export const REMOVE_SEARCH = "REMOVE_SEARCH";

export const addSearch = (location) => ({
  type: ADD_SEARCH,
  payload: location,
});
export const setSearchError = (error) => ({
  type: SET_SEARCH_ERROR,
  payload: error,
});
export const removeSearch = (index) => ({
  type: REMOVE_SEARCH,
  payload: index,
});
