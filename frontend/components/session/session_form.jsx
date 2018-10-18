import React from 'react';
import { withRouter } from 'react-router-dom';
import GreetingHeader from '../greeting/greeting-header';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitTimeout: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
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
    setTimeout(() => this.setState({username: "g"}), 100)
    setTimeout(() => this.setState({username: "go"}), 200)
    setTimeout(() => this.setState({username: "goo"}), 300)
    setTimeout(() => this.setState({username: "goos"}), 400)
    setTimeout(() => this.setState({username: "goose"}), 500)

    setTimeout(() => this.setState({password: "s"}), 800)
    setTimeout(() => this.setState({password: "st"}), 900)
    setTimeout(() => this.setState({password: "sta"}), 1000)
    setTimeout(() => this.setState({password: "star"}), 1100)
    setTimeout(() => this.setState({password: "starw"}), 1200)
    setTimeout(() => this.setState({password: "starwa"}), 1300)
    setTimeout(() => this.setState({password: "starwar"}), 1400)
    setTimeout(() => this.setState({password: "starwars"}), 1500)

    setTimeout(this.props.demoLogin, 1800)

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

          <form className="session-form">


            <div className="form-title">
              {this.props.formType} to Quack
            </div>

            <p className="label"> Enter your username and password</p>

            {this.renderErrors()}

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
              type="password"
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
