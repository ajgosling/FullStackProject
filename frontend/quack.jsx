import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import {signup, login, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.signup = signup;
  window.login = login;
  window.logout = logout;


  // just for testing
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //
  ReactDOM.render(<Root store={store} />, root);
});
