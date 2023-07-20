import { ADD_USERS, ADD_USERS_FAILED } from "../actions/actionTypes"

const initialState = {
    newUsers : {},
    errorMassage : ""
}

const addUsersReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_USERS:
            return {
                ...state,
                newItems:action.payload
            }
        case ADD_USERS_FAILED:
            return {
                ...state,
                errorMassage:action.payload,
            }
        default :
        return state
    }
}

export default addUsersReducer