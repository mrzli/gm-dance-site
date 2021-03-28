import { Location } from 'history';
import { matchPath } from 'react-router-dom';
import { LabelUrlPair } from '../../types/label-url-pair';

export function getHeaderTitle(
  location: Location,
  labelUrlPairs: readonly LabelUrlPair[]
): string {
  return getMatchedLabelUrlPair(location, labelUrlPairs)?.label ?? '';
}

function getMatchedLabelUrlPair(
  location: Location,
  labelUrlPairs: readonly LabelUrlPair[]
): LabelUrlPair | undefined {
  const pathName = location.pathname;
  if (pathName === '/') {
    return labelUrlPairs.find((pair) => pair.url === '/');
  }

  return labelUrlPairs.find(
    (pair) => pair.url !== '/' && matchPath(pathName, { path: pair.url })
  );
}
