import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Signup',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    demoLogin: () => dispatch(login({username: "goose", password: "starwars"})),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
