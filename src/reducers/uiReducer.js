import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import {
  SHOW_SPINNER,
  HIDE_SPINNER,
} from '../actions/types';

const uiState = Immutable.fromJS({
  spinnerVisible: false,
});

const uiReducers = handleActions({
  [SHOW_SPINNER]: (state) => (
    state.set('spinnerVisible', true)
  ),
  [HIDE_SPINNER]: (state) => (
    state.set('spinnerVisible', false)
  ),
}, uiState);

export default uiReducers;
