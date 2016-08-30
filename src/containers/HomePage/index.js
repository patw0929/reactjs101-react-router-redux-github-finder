import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';

import {
  getGithub,
  changeUserId,
} from '../../actions';

const mapStateToProps = (state) => ({
  userId: state.getIn(['github', 'userId']),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeUserId: (event) => (
    dispatch(changeUserId(event.target.value))
  ),
  onSubmitUserId: (userId) => () => (
    dispatch(getGithub(userId))
  ),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { userId } = stateProps;
  const { onSubmitUserId } = dispatchProps;
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    onSubmitUserId: onSubmitUserId(userId),
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HomePage);
