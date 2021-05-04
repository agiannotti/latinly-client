import React, { Component } from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  render() {
    return (
      <section className='registration__container'>
        <h2 className='registration__option'>
          Demo Credentials:
          <br />
          Username: admin1
          <br />
          Password: 1Aa!2Bb@
          <br />
        </h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;
