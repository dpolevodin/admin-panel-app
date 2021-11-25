export const formActionTypes = {
    SET_VISIBLE: "FORM.SET_VISIBLE",
    SET_ORDER: "FORM.SET_ORDER",
  };
  
  export const formActions = {
    setVisible: () => ({
      type: formActionTypes.SET_VISIBLE
    }),
    setOrder: (payload) => ({
      type: formActionTypes.SET_ORDER,
      payload
    }),
  };