import { carousels, todo, dealsLead } from "../../MOCKDATA";

export const getCarousel = () => {
  return dispatch => {
    dispatch({
      type: "GET_CAROUSEL",
      payload: {
        carousels: carousels,
        isFetchingCarousel: false,
        isFetchingErrorCarousel: false
      }
    });
  };
};

export const getTodo = () => {
  return dispatch => {
    dispatch({
      type: "GET_TODO",
      payload: {
        todo: todo,
        isFetchingTodo: false,
        isFetchingErrorTodo: false
      }
    });
  };
};

export const getDealLeads = () => {
  return dispatch => {
    dispatch({
      type: "GET_DEALS_LEAD",
      payload: {
        dealsLead: dealsLead,
        isFetchingDealsLead: false,
        isFetchingErrorDealsLead: false
      }
    });
  };
};
