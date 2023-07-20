import { ADD_CATEGORIES, ADD_CATEGORIES_FAILED } from "../actions/actionTypes"

const initialState = {
    newCategoires : {},
    errorMassage : ""
}

const addCategoriesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_CATEGORIES:
            return {
                ...state,
                newItems:action.payload
            }
        case ADD_CATEGORIES_FAILED :
            return {
                ...state,
                errorMassage:action.payload,
            }
        default :
        return state
    }
}

export default addCategoriesReducer