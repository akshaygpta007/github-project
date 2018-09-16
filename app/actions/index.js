export const ADD_USERS = "ADD_USERS";
export const ADD_USER_REPOSITORY_DETAILS = "ADD_USER_REPOSITORY_DETAILS";

export const saveUsersDataToStore = (users, dispatch) => {
    dispatch({ type: ADD_USERS, data: users });
}

export const saveRepositoryDetailsDataToStore = (id, reposDetails, dispatch) => {
    dispatch({ type: ADD_USER_REPOSITORY_DETAILS, data: { id, reposDetails } });
}