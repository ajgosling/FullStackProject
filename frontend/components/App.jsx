import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ChannelForm from './channel/channel_form';
import Workspace from './workspace/workspace';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

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
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/channels/:channelId" component={Workspace} />
      <AuthRoute path="/" component={GreetingContainer} />
    </Switch>
  </div>
);
export default App;
