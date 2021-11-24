import { formActionTypes } from "./actions";

const initialState = {
  isVisible: false,
  order: null,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case formActionTypes.SET_VISIBLE:
      return {...state, isVisible: !state.isVisible, order: action.payload};
    default:
      return state;
  }
};
