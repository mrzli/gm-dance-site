import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTE_DATA } from '../routes/route-data';

export function ScreenRoutes(): React.ReactElement {
  return (
    <Switch>
      {ROUTE_DATA.map((route) => {
        return (
          <Route key={route.url} exact={route.exact} path={route.url}>
            {route.element}
          </Route>
        );
      })}
      <Route path={'*'}>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  );
}
