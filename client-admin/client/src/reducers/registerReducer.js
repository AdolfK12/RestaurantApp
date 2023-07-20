import { REGISTER, REGISTER_FAILED } from "../actions/actionTypes";

const initialState = {
  newUser: {},
  errorMessage: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        newUser: action.payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
