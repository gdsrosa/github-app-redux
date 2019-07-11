import React from 'react';
import { connect } from 'react-redux';

import UserSearch from './UserSearch';
import UserInfo from './UserInfo';
import { getDisplayData } from '../ducks/User';

const Main = ({ displayData }) => (
  <div>
    <h1>Github App User</h1>
    <UserSearch />
    {!displayData ? '' : <UserInfo />}
  </div>
);

const mapStateToProps = state => ({
  displayData: getDisplayData(state),
});

export default connect(
  mapStateToProps,
  null
)(Main);
