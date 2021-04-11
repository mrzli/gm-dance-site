import React from 'react';

export interface RouteItem {
  readonly label: string;
  readonly url: string;
  readonly exact: boolean;
  readonly element: React.ReactElement;
}
