import './index.css';
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import React, { Component } from 'react';
import { Link } from 'react-router';
import Navigation from './navigation';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <header>
          <Navigation />
        </header>
        <main>
					<div className="container">
            { children }
					</div>
        </main>
        <footer className="page-footer light-blue white-text"> 
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                About
              </div>
            </div>   
          </div>
          <div className="footer-copyright">
            <div className="container">
              Copyright &copy; 2017 Made with Neckbeards
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
