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
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();

  }

  renderErrors() {
    return(
      <ul className="session-errors">
        {this.props.errors.map((err, idx) => (
          <li key={`err-${idx}`}>
            - {err}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-body-container">

        <GreetingHeader />

        <div className="session-form-container">
          {this.renderErrors()}
          <form className="session-form">


            <div className="form-title">
              {this.props.formType} to Quack
            </div>

            <p className="label"> Enter your username and password</p>
            <input
              type="text"
              className="user-input"
              placeholder="goose"
              value={this.state.username}
              onChange={this.update('username')}
              required
            />
            <br />
            <input
              type="text"
              className="user-input"
              placeholder="password"
              value={this.state.password}
              onChange={this.update('password')}
              required
            />
            <br />
            <button className="session-button" onClick={this.handleSubmit}><span>{this.props.formType}</span></button>
            <button className="session-button" onClick={this.handleDemoLogin}><span>Demo Login</span></button>
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
