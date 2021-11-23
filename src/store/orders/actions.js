export const ordersActionTypes = {
    SET_ORDERS: "ORDERS.SET_ORDERS",
    SEARCH_ORDERS: "ORDERS.SEARCH_ORDERS",
    SORT_ORDERS_BY_COUNT: "ORDERS.SORT_ORDERS_BY_COUNT",
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
    sortOrdersByCount: (payload) => ({
      type: ordersActionTypes.SORT_ORDERS_BY_COUNT,
      payload
    }),
  };