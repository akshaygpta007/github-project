import { ADD_USERS, ADD_USER_REPOSITORY_DETAILS } from "../actions/"
 
let dataState = { repository: {} };

const rootReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_USERS:
            state = Object.assign({}, state, { users: action.data });
            return state;
        case ADD_USER_REPOSITORY_DETAILS:
            const repository = { ...state.repository };
            repository[action.data.id] = action.data.reposDetails;
            state = Object.assign({}, state, { repository });
            return state;
        default:
            return state;
    }
};
 
export default rootReducer;