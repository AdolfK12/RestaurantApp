import { FETCH_ITEMS_ID, FETCH_ITEMS__IDFAILED } from "../actions/actionTypes";

const initialState = {
  items: [],
  errorMessage: "",
};

const itemsIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_ID:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_ITEMS__IDFAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default itemsIdReducer;
