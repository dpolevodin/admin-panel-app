import { paginationActionTypes } from "./actions";

const initialState = {
  currentPage: 1,
  itemsCountPerPage: 10,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case paginationActionTypes.SET_CURRENT_PAGE:
      return {...state, currentPage: action.page}
    default:
      return state;
  }
};
