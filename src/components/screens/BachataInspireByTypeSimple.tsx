import React from 'react';
import { FIGURE_BY_TYPE_DATA } from '../../data/figure-by-type-data/figure-by-type-data';
import { FigureByTypeSimpleContainer } from '../domain/figure-by-type-simple/FigureByTypeSimpleContainer';

export function BachataInspireByTypeSimple(): React.ReactElement {
  return (
    <div>
      <FigureByTypeSimpleContainer figuresData={FIGURE_BY_TYPE_DATA} />
    </div>
  );
}
