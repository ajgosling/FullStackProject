import React from 'react';
import {Link} from 'react-router-dom';

const GreetingHeader = () => (
  <header className='greeting-header'>
    <ul className='greeting-header-list'>
      <img className='quack-logo' src={window.images.logo} />
      <li className='why-quack'><span>Why Quack?</span></li>
      <li><span>Solutions</span></li>
      <li><span>Resources</span></li>
      <li><span>Pricing</span></li>
      <li className="greeting-header-login">
        <span><Link to="/login">Sign In</Link></span>
      </li>
      <Link className="greeting-header-signup" to="/signup">GET STARTED</Link>
    </ul>
  </header>

);

export default GreetingHeader;
