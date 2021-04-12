import React from 'react';
import { RouteItem } from '../../types/route-item';
import { BachataInspireByStartHoldScreen } from '../screens/BachataInspireByStartHoldScreen';
import { MariusAndElenaScreen } from '../screens/MariusAndElenaScreen';
import { BachataInspireByType } from '../screens/BachataInspireByType';

const EXPLICIT_ROUTES: readonly RouteItem[] = [
  {
    label: 'Bachata Inspire By Start Hold',
    url: '/bachata-inspire-by-start-hold',
    exact: false,
    element: <BachataInspireByStartHoldScreen />
  },
  {
    label: 'Bachata Inspire By Type',
    url: '/bachata-inspire-by-type',
    exact: false,
    element: <BachataInspireByType />
  },
  {
    label: 'Marius & Elena',
    url: '/marius-and-elena',
    exact: false,
    element: <MariusAndElenaScreen />
  }
];

const DEFAULT_ROUTE_INDEX = 1;

export const ROUTE_DATA: readonly RouteItem[] = [
  { ...EXPLICIT_ROUTES[DEFAULT_ROUTE_INDEX], url: '/', exact: true },
  ...EXPLICIT_ROUTES
];
