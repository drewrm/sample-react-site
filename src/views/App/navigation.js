import 'font-awesome/css/font-awesome.css'
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    const { children } = this.props;

    return (
      <nav className="light-blue top-nav">
        <div className="container">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><i className="fa fa-clock-o" aria-hidden="true" title="Recent"></i></li>
            <li><i className="fa fa-fire" aria-hidden="true" title="Popular"></i></li>
            <li><i className="fa fa-search" aria-hidden="true"></i></li>
            <li>Register <i className="fa fa-user-plus" aria-hidden="true"></i></li>
            <li>Log In <i className="fa fa-sign-in" aria-hidden="true"></i></li>
          </ul>
        </div>
        </div>
      </nav>
    ); 
  }
}
