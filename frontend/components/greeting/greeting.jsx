
import React from 'react';
import { Link } from 'react-router-dom';
import GreetingHeader from './greeting-header.jsx';
import GreetingBody from './greeting-body.jsx';


const myGreeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <GreetingHeader />
      <GreetingBody />
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default myGreeting;
