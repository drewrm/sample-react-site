import './index.css'
import 'wingcss/dist/wing.min.css'
import React, { Component } from 'react'
import Navigation from './navigation'

export default class App extends Component {
  render () {
    const { children } = this.props

    return (
      <div className='App'>
        <header>
          <Navigation />
        </header>
        <main>
          <div className='container'>
            { children }
          </div>
        </main>
        <footer className='page-footer white'>
          <div className='container'>
            <div className='row'>
              <div className='col l6 s12'>
                About
              </div>
            </div>
          </div>
          <div className='footer-copyright white grey-text'>
            <div className='container'>
              Copyright &copy; 2017 Made with Neckbeards
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
}
