const initialState = {
  details: [],
  isFetchingDetails: true,
  isFetchingErrorDetails: false
};

export default detailReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload.details,
        isFetchingDetails: action.payload.isFetchingDetails,
        isFetchingErrorDetails: action.payload.isFetchingErrorDetails
      };
  }
};
