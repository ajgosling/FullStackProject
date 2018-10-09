import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/" component={GreetingContainer} />

    </Switch>

  </div>
);

export default App;
