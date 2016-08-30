import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import {
  GET_GITHUB_SUCCESS,
  CHANGE_USER_ID,
} from '../actions/types';

const githubState = Immutable.fromJS({
  userId: '', // user id
  data: {}, // user data fetched from github api
});

const githubReducers = handleActions({
  [GET_GITHUB_SUCCESS]: (state, { payload }) => (
    state.merge({
      data: payload.data,
    })
  ),
  [CHANGE_USER_ID]: (state, { payload }) => (
    state.merge({
      userId: payload.userId,
    })
  ),
}, githubState);

export default githubReducers;
