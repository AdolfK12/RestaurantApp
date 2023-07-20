import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import itemsReducer from "../reducers/itemsReducer";
import { CLEAR_STATE } from "../actions/actionTypes";
import thunk from "redux-thunk";
import addItemsReducer from "../reducers/addItemsReducer";
import deleteItemReducer from "../reducers/deleteItemsReducer";
import categoriesReducer from "../reducers/categoriesReducer";
import addCategoriesReducer from "../reducers/addCategoriesReducer";
import addUsersReducer from "../reducers/addUsersReducer";
import loginReducer from "../reducers/loginReducer";
import registerReducer from "../reducers/registerReducer";

const appReducer = combineReducers({
  items: itemsReducer,
  addItems: addItemsReducer,
  deleteItem: deleteItemReducer,
  categories: categoriesReducer,
  addCategories: addCategoriesReducer,
  deleteCatefories: deleteItemReducer,
  addUsers: addUsersReducer,
  login: loginReducer,
  register: registerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
