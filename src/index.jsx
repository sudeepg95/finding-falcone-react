import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import history from './Router/History';
import AppComponent from './Components/App/AppComponent';
import configureWebFontService from './Services/WebFontService';

// eslint-disable-next-line no-console
console.log(`${process.env.PROJECT_VERSION}:${process.env.REACT_APP_ENV}`);

if (process.env.REACT_APP_ENV === 'Development') {
  configureWebFontService();
}

ReactDOM.render(
  <Router history={history}>
    <AppComponent />
  </Router>,
  document.getElementById('root')
);
