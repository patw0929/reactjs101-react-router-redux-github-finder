import 'whatwg-fetch';
import {
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAIL,
  CHANGE_USER_ID,
} from './types';
import {
  showSpinner,
  hideSpinner,
} from './ui';

export const getGithub = (userId) =>
  (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE });
    dispatch(showSpinner());
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_GITHUB_SUCCESS,
          payload: {
            data: json,
          },
        });
        dispatch(hideSpinner());
      })
      .catch(() => {
        dispatch({
          type: GET_GITHUB_FAIL,
        });
      });
  };

export const changeUserId = (userId) => ({
  type: CHANGE_USER_ID,
  payload: {
    userId,
  },
});
