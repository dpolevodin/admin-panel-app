export const formActionTypes = {
    SET_VISIBLE: "FORM.SET_ORDERS",
  };
  
  export const formActions = {
    setVisible: (payload) => ({
      type: formActionTypes.SET_VISIBLE,
      payload
    }),
  };