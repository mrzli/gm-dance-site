import { Location } from 'history';
import { matchPath } from 'react-router-dom';
import { RouteItem } from '../../types/route-item';

export function getHeaderTitle(
  location: Location,
  labelUrlPairs: readonly RouteItem[]
): string {
  return getMatchedLabelUrlPair(location, labelUrlPairs)?.label ?? '';
}

function getMatchedLabelUrlPair(
  location: Location,
  routeData: readonly RouteItem[]
): RouteItem | undefined {
  return routeData.find((route) =>
    matchPath(location.pathname, {
      path: route.url,
      exact: route.exact
    })
  );
}
