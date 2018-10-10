
import React from 'react';
import { Link } from 'react-router-dom';
import GreetingHeader from './greeting-header.jsx';
import GreetingBody from './greeting-body.jsx';


const Greeting = () => {
  return (
    <nav className="login-signup">
      <GreetingHeader />
      <GreetingBody />
    </nav>

  );
};


export default Greeting;
