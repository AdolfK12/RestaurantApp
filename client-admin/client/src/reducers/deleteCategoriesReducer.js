
import { DELETE_CATEGORIES, DELETE_CATEGORIES_FAILED } from "../actions/actionTypes";

const initialState = {
  errorMessage: "",
};

const deleteCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CATEGORIES:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case DELETE_CATEGORIES_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deleteCategoriesReducer;
