export const paginationActionTypes = {
    SET_CURRENT_PAGE: "PAGINATION.SET_CURRENT_PAGE",
    SET_MAX_PAGE: "PAGINATION.SET_MAX_PAGE",
  };
  
  export const paginationActions = {
    setCurrentPage: (page) => ({
      type: paginationActionTypes.SET_CURRENT_PAGE,
      page
    }),
    setMaxPage: (maxPage) => ({
      type: paginationActionTypes.SET_MAX_PAGE,
      maxPage
    }),
  }