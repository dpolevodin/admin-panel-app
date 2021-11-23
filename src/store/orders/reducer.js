import { ordersActionTypes } from "./actions";
import Mocks from "../../data/Orders.json";

const initialState = [...Mocks];

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ordersActionTypes.SET_ORDERS:
      return (state = [...action.payload]);
    case ordersActionTypes.SEARCH_ORDERS:
      return state.filter(
        (order) =>
          String(order.id).includes(action.payload) ||
          String(order.name).toLowerCase().includes(action.payload)
      );
    default:
      return state;
  }
};
