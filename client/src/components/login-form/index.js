import React, { Component } from 'react';
import styles from './LoginForm.module.scss';
import { withRouter } from "react-router-dom";

import { signUp, login } from '../../helpers/userHelpers';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      signup: false,
      errors: '',
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      errors: '',
    });
  }

  handleSubmit = (event) => {
   event.preventDefault();
   this.state.signup ? this.signup() : this.login();
  }

  signup = async () => {
    const { email, password, name } = this.state;
    const user = await signUp({email, password, name});
    
    if (user.errors) {
      this.setState({ errors: 'Email ID already taken' });
      return;
    }

    this.props.history.push('/dash');
  }

  login = async () => {
    const loginState = await login(this.state);
    
    if (loginState['logged_in'] && loginState['logged_in'] === 'true') {
      this.props.history.push('/dash');
    } 

    if (loginState.errors) {
      this.setState({ errors: loginState.errors });
    }
  }

  toggleSignup = () => {
    this.setState((prevState) => ({ signup: !prevState.signup }));
  }

  formValid = () => {
    const { email, password, confirmPassword, signup, name } = this.state;
    const loginFieldsValid = email.length > 4 && password.length > 5;
    const signupFieldsValid = confirmPassword.length > 5 && 
      confirmPassword === password && 
      name.length > 0;

    return loginFieldsValid && (!signup || signupFieldsValid);
  }

  render() { 
    const { 
      signup, 
      errors, 
      name, 
      password, 
      confirmPassword, 
      email 
    } = this.state;

    return (
      <form className={styles.Form}>
        <h2>{signup ? 'Sign Up' : 'Login'}</h2>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={this.handleInputChange} />
        
        {signup && (
          <input
          className="animated fadeIn"
          name="name"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={this.handleInputChange} />
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.handleInputChange} />
        
        {signup && (
          <input
          className="animated fadeIn"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={this.handleInputChange} />
        )}

        <small>
          {signup ? 'Already a' : 'New'} user? Click &nbsp;
          <span className="link" onClick={this.toggleSignup}>
            here to sign {signup ? 'in' : 'up'}
          </span>
        </small>

        <button onClick={this.handleSubmit} disabled={!this.formValid()}>{signup ? 'Sign Up' : 'Login'}</button>
        {errors.length > 0 && (<div className="alert-error">{errors}</div>)}
      </form>
    );
  }
}
 
export default withRouter(LoginForm);