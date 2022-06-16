import baseUrl from "../../Api/api";
import * as types from "./actionType";

const fetchDataReq = (payload) => {
  return {
    type: types.FETCH_DATA_REQ,
    payload,
  };
};
const fetchDataSucces = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};
const fetchDataFaliure = (payload) => {
  return {
    type: types.FETCH_DATA_FALIURE,
    payload,
  };
};

export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataReq());
    baseUrl
      .get("/products", {
        params: {
          ...payload,
        },
      })
      .then((res) => dispatch(fetchDataSucces(res.data)))
      .catch((err) => dispatch(fetchDataFaliure(err.data)));
  };
};
