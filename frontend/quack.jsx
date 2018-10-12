import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import {signup, login, logout} from './actions/session_actions';
import {fetchChannels, fetchChannel} from './actions/channel_actions';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');

  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchChannels = fetchChannels;

  window.fetchChannel = fetchChannel;

  // just for testing
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //
  ReactDOM.render(<Root store={store} />, root);
});
