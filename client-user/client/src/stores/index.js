import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import itemsReducer from "../reducers/itemsReducer";
import { CLEAR_STATE } from "../actions/actionTypes";
import thunk from "redux-thunk";
import itemsIdReducer from "../reducers/itemIdReducer";
// import addItemsReducer from "../reducers/addItemsReducer";
// import deleteItemReducer from "../reducers/deleteItemsReducer";
// import categoriesReducer from "../reducers/categoriesReducer";
// import addCategoriesReducer from "../reducers/addCategoriesReducer";
// import addUsersReducer from "../reducers/addUsersReducer";

const appReducer = combineReducers({
  items: itemsReducer,
  itemsId: itemsIdReducer,
  // addItems: addItemsReducer,
  // deleteItem: deleteItemReducer,
  // categories: categoriesReducer,
  // addCategories: addCategoriesReducer,
  // deleteCatefories: deleteItemReducer,
  // addUsers: addUsersReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
