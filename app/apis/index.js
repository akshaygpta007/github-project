import { saveUsersDataToStore, saveRepositoryDetailsDataToStore } from "../actions";
import { GITHUB_USER_SEARCH_API, DEFAULT_SEARCH_KEY } from "../constants/apis";

const appendQueryParameter = (API, parameter) => API+"?q="+parameter;  


export const fetchAllGithubUsers = (dispatch, searchString = DEFAULT_SEARCH_KEY) => {
    const apiUrl = appendQueryParameter(GITHUB_USER_SEARCH_API, searchString);
    fetch(appendQueryParameter(GITHUB_USER_SEARCH_API, searchString))
    .then((response) => {
        saveUsersDataToStore(JSON.parse(response._bodyInit), dispatch);
    })
    // Saving this to console for now, just to make sure 
    // API is working.
    .catch(e => { console.log('###### error in API fetching', e); });
  };

export const getRepositoryDetails = (dispatch, id, repos_url) => {
    fetch(repos_url)
    .then((response) => {
        saveRepositoryDetailsDataToStore(id, JSON.parse(response._bodyInit), dispatch);
    })
    // Saving this to console for now, just to make sure 
    // API is working.
    .catch(e => { console.log('###### error in API fetching', e); });
}