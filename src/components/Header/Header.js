import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../context/UserContext';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    let username = this.context.user.name;

    return (
      <div className='logged__in'>
        <div className='user__logged__in'>
          Hello, {username.charAt(0).toUpperCase() + username.slice(1)}.
        </div>
        <nav className='logout__container'>
          <Link
            className='logout__link'
            onClick={this.handleLogoutClick}
            to='/login'
          >
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='login__route'>
        <p className='tagline'>
          Learn latin phrases with the spaced repetition revision technique.
        </p>
        <nav className='nav__links'>
          <Link to='/login' className='login__link'>
            Login
          </Link>
          <br />

          <Link to='/register' className='register__link'>
            Sign up
          </Link>
        </nav>
      </div>
    );
  }

  render() {
    return (
      <header className='header__container'>
        <h1 className='header__title'>
          <Link to='/' className='header__link'>
            <div className='app_name'>Latinly. </div>
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
