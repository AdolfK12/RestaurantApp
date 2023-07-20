
import { DELETE_ITEM, DELETE_ITEM_FAILED } from "../actions/actionTypes";

const initialState = {
  items: [],
  errorMessage: "",
};

const deleteItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items?.filter(item => item.id !== action.payload),
      };
    case DELETE_ITEM_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deleteItemReducer;
