import * as types from "./actionType";

const initState = {
  products: [],
  error: "",
  isLoading: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQ:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        error: "",
        isLoading: false,
      };
    case types.FETCH_DATA_FALIURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
