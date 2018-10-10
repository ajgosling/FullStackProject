import React from 'react';
import { withRouter } from 'react-router-dom';
import GreetingHeader from '../greeting/greeting-header';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state);

  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({username: "goose", password: "starwars"});
  }

  renderErrors() {
    return(
      <ul className="session-errors">
        {this.props.errors.map((err, idx) => (
          <li key={`error-${idx}`} className="err">
            - {err}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-div">
        <GreetingHeader />
        <div id="session-form" className="group">
          <form className="session-form">

          {this.renderErrors()}
            <div className="form-title">
              {this.props.formType} to Quack
            </div>

            <p className="label"> Enter your <span>username</span> and <span>password</span></p>
            <input
              type="text"
              className="session-input group"
              placeholder="goose"
              value={this.state.username}
              onChange={this.update('username')}
            />
            <br />
            <input
              type="password"
              className="session-input group"
              placeholder="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <br />
            <button className="session-button group" onClick={this.handleSubmit}><span>{this.props.formType}</span></button>
            <button className="session-button group" onClick={this.demoLogin}><span>Demo Login</span></button>
            <div className="checkbox">
              <input type="checkbox" className="checkbox-input" />
              <span>Remember me</span>

            </div>
          </form>
        </div>
      </div>
    );
  }



}




export default withRouter(SessionForm);
