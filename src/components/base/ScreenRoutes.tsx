import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BachataInspireScreen } from '../screens/BachataInspireScreen';
import { MariusAndElenaScreen } from '../screens/MariusAndElenaScreen';

interface ScreenRoutesProps {}

export function ScreenRoutes(props: ScreenRoutesProps): React.ReactElement {
  return (
    <Switch>
      <Route exact={true} path={'/'}>
        <BachataInspireScreen />
      </Route>
      <Route path={'/bachata-inspire'}>
        <BachataInspireScreen />
      </Route>
      <Route path={'/marius-and-elena'}>
        <MariusAndElenaScreen />
      </Route>
      <Route path={'*'}>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  );
}
