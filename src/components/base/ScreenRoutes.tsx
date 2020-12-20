import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IntroScreen } from '../screens/IntroScreen';

interface ScreenRoutesProps {}

export function ScreenRoutes(props: ScreenRoutesProps): React.ReactElement {
  return (
    <Switch>
      <Route exact={true} path={'/'}>
        <IntroScreen />
      </Route>
      <Route path={'*'}>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  );
}
