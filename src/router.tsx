import * as React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/HomePage';
import NotFound from './routes/NotFound';

export default function({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}
