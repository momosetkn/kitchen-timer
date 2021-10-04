import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const ROUTER_BASENAME = window.location.pathname.match(/^(\/[^/]+)/)?.[1] || "/";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <Switch>
        <Route>
          not found
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
