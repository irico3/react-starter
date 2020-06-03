import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import GlobalStyle from './components/styledComponent/GlobalStyle'

const app = document.getElementById('app')

// page
import Top from './containers/Top.jsx'

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Route path="/">
      <Top />
    </Route>
  </Router>,
  app
)
