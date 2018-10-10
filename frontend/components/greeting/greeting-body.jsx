import React from 'react';
import {Link} from 'react-router-dom';
// import ducks from '../../../assets/images/ducks.png';

const GreetingBody = () => (
  <div className='body'>
    <div className='image-container'>
      <img className='new-hotness' src={window.images.ducks} />

    </div>
    <div className='body-container'>
      <p className='body-headline'>
        Fowl Language Encouraged
      </p>
      <p className='body-info'>
        When your team needs to kick off a project,
        hire a new employee, deploy some code,
        play a quick round of duck-duck-goose, finalize next year's budget, visit the local quail-hunter and "paint" their truck white, plan your next office opening, and more, Quack has you covered.
      </p>

      <Link className="body-signup" to="/signup">GET STARTED</Link>
      <p className="body-signin" >Already using Slack? <Link className="body-signin-link" to="/login">Sign In</Link></p>

    </div>
  </div>

);

export default GreetingBody;
