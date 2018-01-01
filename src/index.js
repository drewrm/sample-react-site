import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './views/App'
import Home from './views/Home'
import About from './views/About'

import { createBrowserHistory } from 'history'
import { Router, Route, IndexRoute, Switch } from 'react-router'

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <div>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </App>
    </div>
  </Router>,
  document.getElementById('app')
)
