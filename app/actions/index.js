export const ADD_USERS = "ADD_USERS";

export const saveUsersDataToStore = (users, dispatch) => {
    dispatch({ type: ADD_USERS, data: users });
}