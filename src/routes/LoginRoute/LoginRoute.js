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
        <h5 className='registration__option'>
          <p className='demo__credentials'>
            Demo Credentials:
            <br />
            Username: admin1
            <br />
            Password: 1Aa!2Bb@
            <br />
          </p>
        </h5>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;
