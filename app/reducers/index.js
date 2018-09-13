import { ADD_USERS } from "../actions/"
 
let dataState = { data: [] };

const rootReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_USERS:
            state = Object.assign({}, state, { users: action.data });
            return state;
        default:
            return state;
    }
};
 
export default rootReducer;