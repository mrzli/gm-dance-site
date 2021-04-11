import React from 'react';
import { RouteItem } from '../../types/route-item';
import { BachataInspireByStartHoldScreen } from '../screens/BachataInspireByStartHoldScreen';
import { MariusAndElenaScreen } from '../screens/MariusAndElenaScreen';
import { BachataInspireByType } from '../screens/BachataInspireByType';

export const ROUTE_DATA: readonly RouteItem[] = [
  {
    label: 'Intro',
    url: '/',
    exact: true,
    element: <BachataInspireByStartHoldScreen />
  },
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
