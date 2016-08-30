import { combineReducers } from 'redux-immutable';
import ui from './uiReducer';
import github from './githubReducer';

const rootReducer = combineReducers({
  ui,
  github,
});

export default rootReducer;
