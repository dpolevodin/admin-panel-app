export const ordersActionTypes = {
    SET_ORDERS: "ORDERS.SET_ORDERS",
    SEARCH_ORDERS: "ORDERS.SEARCH_ORDERS",
    SORT_ORDERS: "ORDERS.SORT_ORDERS",
    DELETE_CHECKED_ORDERS: "ORDERS.DELETE_CHECKED_ORDERS",
    FILTER_ORDERS_BY_DATE: "ORDERS.FILTER_ORDERS_BY_DATE",
    FILTER_ORDERS_BY_SUM: "ORDERS.FILTER_ORDERS_BY_SUM",
  };
  
  export const ordersActions = {
    setOrders: (payload) => ({
      type: ordersActionTypes.SET_ORDERS,
      payload,
    }),
    searchOrders: (payload) => ({
      type: ordersActionTypes.SEARCH_ORDERS,
      payload
    }),
    sortOrders: (payload) => ({
      type: ordersActionTypes.SORT_ORDERS,
      payload
    }),
    deleteCheckedOrders: (payload) => ({
      type: ordersActionTypes.DELETE_CHECKED_ORDERS,
      payload
    }),
    filterOrdersByDate: (minDate, maxDate) => ({
      type: ordersActionTypes.FILTER_ORDERS_BY_DATE,
      minDate,
      maxDate
    }),
    filterOrdersBySum: (minSum, maxSum) => ({
      type: ordersActionTypes.FILTER_ORDERS_BY_SUM,
      minSum,
      maxSum
    }),
  };