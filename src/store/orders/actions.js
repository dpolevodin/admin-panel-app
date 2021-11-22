export const ordersActionTypes = {
    SET_ORDERS: "ORDERS.SET_ORDERS",
  };
  
  export const ordersActions = {
    setOrders: (payload) => ({
      type: ordersActionTypes.SET_ORDERS,
      payload,
    }),
  };