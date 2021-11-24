import { ordersActionTypes } from "./actions";
import Mocks from "../../data/Orders.json";

const initialState = [...Mocks];

const sortByKey = (key, SortUp) => (a, b) => {
  return SortUp === true ? 
  (a[key] > b[key] ? 1 : -1) :
  (a[key] < b[key] ? 1 : -1)
}

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
    case ordersActionTypes.SORT_ORDERS:
      return state
        .slice()
        .sort(sortByKey(action.payload.value, action.payload.SortUp))
    default:
      return state;
  }
};
