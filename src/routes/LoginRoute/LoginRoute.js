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
            Username: admin1 <br />
            <br />
            Password: 1Aa!2Bb@
            <br />
            <br />
            It might take a few seconds to wake up the Heroku server.
          </p>
        </h5>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;
