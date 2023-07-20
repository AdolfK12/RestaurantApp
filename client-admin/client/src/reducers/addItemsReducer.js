import { ADD_ITEMS, ADD_ITEMS_FAILED } from "../actions/actionTypes"

const initialState = {
    newItems : {},
    errorMassage : ""
}

const addItemsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_ITEMS:
            return {
                ...state,
                newItems:action.payload
            }
        case ADD_ITEMS_FAILED :
            return {
                ...state,
                errorMassage:action.payload,
            }
        default :
        return state
    }
}

export default addItemsReducer