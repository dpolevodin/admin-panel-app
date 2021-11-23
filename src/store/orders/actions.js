export const ordersActionTypes = {
    SET_ORDERS: "ORDERS.SET_ORDERS",
    SEARCH_ORDERS: "ORDERS.SEARCH_ORDERS",
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
  };