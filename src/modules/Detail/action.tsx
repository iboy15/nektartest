import { todo } from "../../MOCKDATA";

export const getDetails = name => {
  return dispatch => {
    dispatch({
      type: "GET_DETAILS",
      payload: {
        details: todo.filter(x => x.company === name),
        isFetchingDetails: false,
        isFetchingErrorDeatails: false
      }
    });
  };
};
