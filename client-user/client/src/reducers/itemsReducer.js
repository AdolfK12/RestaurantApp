import { FETCH_ITEMS, FETCH_ITEMS_FAILED } from "../actions/actionTypes";

const initialState = {
  items: [],
  errorMessage: "",
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_ITEMS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
