import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Layout from 'layouts/Layout.js';
import theme from 'variables/theme.js';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={Layout} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
