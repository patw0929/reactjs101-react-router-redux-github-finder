import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId,
}) => (
  <div>
    <TextField
      hintText="Please key in your GitHub user id."
      onChange={onChangeUserId}
    />
    <Link
      to={{
        pathname: '/result',
        query: { userId },
      }}
    >
      <RaisedButton label="Submit" onClick={onSubmitUserId(userId)} primary />
    </Link>
  </div>
);

HomePage.propTypes = {
  userId: React.PropTypes.string,
  onSubmitUserId: React.PropTypes.func,
  onChangeUserId: React.PropTypes.func,
};

export default HomePage;
