import { paginationActionTypes } from "./actions";

const initialState = {
  currentPage: 1,
  itemsCountPerPage: 10,
  maxPage: null,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case paginationActionTypes.SET_CURRENT_PAGE:
      const result = action.page === state.currentPage && action.page > 1 ?
      {...state, currentPage: (action.page - 1)} :
      {...state, currentPage: action.page}
      return result
    case paginationActionTypes.SET_MAX_PAGE:
      return {...state, maxPage: action.maxPage}
    default:
      return state;
  }
};
