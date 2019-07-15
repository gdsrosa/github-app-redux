import React from 'react';
import { connect } from 'react-redux';

import UserSearch from './UserSearch';
import UserInfo from './UserInfo';
import Footer from './Footer';
import { getDisplayData } from 'ducks/User';

const Main = ({ displayData }) => (
  <div>
    <h1>Github User Finder</h1>
    <div className="main">
      <UserSearch />
      {!displayData ? '' : <UserInfo />}
      <Footer />
    </div>
  </div>
);

const mapStateToProps = state => ({
  displayData: getDisplayData(state),
});

export default connect(
  mapStateToProps,
  null
)(Main);
