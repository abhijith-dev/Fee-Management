import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Routing';
import { Provider } from 'react-redux'
import store from './store'
import './stylesheets/body.css'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routing />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

