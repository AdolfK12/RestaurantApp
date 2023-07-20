import {
  ADD_CATEGORIES,
  ADD_CATEGORIES_FAILED,
  ADD_ITEMS,
  ADD_ITEMS_FAILED,
  ADD_USERS,
  ADD_USERS_FAILED,
  DELETE_CATEGORIES,
  DELETE_CATEGORIES_FAILED,
  DELETE_ITEM,
  DELETE_ITEM_FAILED,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILED,
  FETCH_ITEMS,
  FETCH_ITEMS_FAILED,
  FETCH_ITEMS_ID,
  FETCH_ITEMS__IDFAILED,
} from "./actionTypes";

const BASE_URL = "https://f3c1.c1-rental-transportation.site";

// ITEMS ==========================
export const itemsAction = (itemsData) => ({
  type: FETCH_ITEMS,
  payload: itemsData,
});

export const itemsActionError = (error) => ({
  type: FETCH_ITEMS_FAILED,
  payload: error,
});

export const fecthItems = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/items`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }
    dispatch(itemsAction(jsonData));
  } catch (error) {
    dispatch(itemsActionError(error));
  }
};

export const fetchItemsId = (itemsIdData) => ({
  type: FETCH_ITEMS_ID,
  payload: itemsIdData,
});

export const fetchItemsIdError = (error) => ({
  type: FETCH_ITEMS__IDFAILED,
  payload: error,
});

export const fetchItemsIdMiddleware = (itemId) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${itemId}`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    const jsonData = await response.json();
    console.log(jsonData);
    if (!response.ok) {
      throw jsonData.error;
    }

    dispatch(fetchItemsId(jsonData));
  } catch (error) {
    dispatch(fetchItemsIdError(error));
  }
};

export const addItems = (itemsData) => ({
  type: ADD_ITEMS,
  payload: itemsData,
});

export const addItemsError = (error) => ({
  type: ADD_ITEMS_FAILED,
  payload: error,
});

export const addItemsMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }
    dispatch(addItems(jsonData));
    dispatch(fecthItems());
  } catch (error) {
    dispatch(addItemsError(error));
  }
};

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});

export const deleteItemError = (error) => ({
  type: DELETE_ITEM_FAILED,
  payload: error,
});

export const deleteItemMiddleware = (itemId) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${itemId}`, {
      method: "DELETE",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData.error;
    }

    // dispatch(deleteItem(itemId));
    dispatch(fecthItems());
  } catch (error) {
    dispatch(deleteItemError(error));
  }
};

// CATEGORIES ===============
export const categoriesAction = (categoriesData) => ({
  type: FETCH_CATEGORIES,
  payload: categoriesData,
});

export const categoriesActionError = (error) => ({
  type: FETCH_CATEGORIES_FAILED,
  payload: error,
});

export const fecthCategories = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }
    dispatch(categoriesAction(jsonData));
  } catch (error) {
    dispatch(categoriesActionError(error));
  }
};

export const addCategories = (categoriesData) => ({
  type: ADD_CATEGORIES,
  payload: categoriesData,
});

export const addCategoriesError = (error) => ({
  type: ADD_CATEGORIES_FAILED,
  payload: error,
});

export const addCategoriesMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }
    dispatch(addCategories(jsonData));
    dispatch(fecthCategories());
  } catch (error) {
    dispatch(addCategoriesError(error));
  }
};

export const deleteCategories = (categoriesId) => ({
  type: DELETE_CATEGORIES,
  payload: categoriesId,
});

export const deleteCategoriesError = (error) => ({
  type: DELETE_CATEGORIES_FAILED,
  payload: error,
});

export const deleteCategoriesMiddleware =
  (categoriesId) => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/categories/${categoriesId}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData.error;
      }

      dispatch(deleteCategories(categoriesId));
      dispatch(fecthCategories());
    } catch (error) {
      dispatch(deleteCategoriesError(error));
    }
  };

// USER ===============================

export const addUser = (userData) => ({
  type: ADD_USERS,
  payload: userData,
});

export const addUserError = (error) => ({
  type: ADD_USERS_FAILED,
  payload: error,
});

export const addUserMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.error;
    }
    dispatch(addUser(jsonData));
  } catch (error) {
    dispatch(addUserError(error));
  }
};
