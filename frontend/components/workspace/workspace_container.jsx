import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import Workspace from './workspace';

const mapStateToProps = ({session, entities: {users}}) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);
