import { connect } from 'react-redux';
import ResultPage from '../../components/ResultPage';

const mapStateToProps = (state) => ({
  data: state.getIn(['github', 'data']),
});

export default connect(mapStateToProps)(ResultPage);
