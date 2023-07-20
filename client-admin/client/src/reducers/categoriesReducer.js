import { FETCH_CATEGORIES, FETCH_CATEGORIES_FAILED, } from '../actions/actionTypes'

const initialState = {
    categories : [],
    errorMessage : "",
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories : action.payload
            }
        case FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                errorMessage : action.payload
            }
        default:
            return state
    }
}

export default categoriesReducer