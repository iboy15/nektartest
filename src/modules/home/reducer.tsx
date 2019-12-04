const initialState = {
  caraousels: [],
  isFetchingCarousel: true,
  isFetchingErrorCarousel: false,
  todo: [],
  isFetchingTodo: true,
  isFetchingErrorTodo: false,
  dealsLead: [],
  isFetchingDealsLead: true,
  isFetchingErrorDealsLead: false
};

export default homeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case "GET_CAROUSEL":
      return {
        ...state,
        carousels: action.payload.carousels,
        isFetchingCarousel: action.payload.isFetchingCarousel,
        isFetchingErrorCarousel: action.payload.isFetchingErrorCarousel
      };
    case "GET_TODO":
      return {
        ...state,
        todo: action.payload.todo,
        isFetchingTodo: action.payload.isFetchingTodo,
        isFetchingErrorTodo: action.payload.isFetchingErrorTodo
      };
    case "GET_DEALS_LEAD":
      return {
        ...state,
        dealsLead: action.payload.dealsLead,
        isFetchingDealsLead: action.payload.isFetchingDealsLead,
        isFetchingErrorDealsLead: action.payload.isFetchingErrorDealsLead
      };
  }
};
