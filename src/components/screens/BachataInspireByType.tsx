import React from 'react';
import { FigureByTypeContainer } from '../domain/figure-by-type/FigureByTypeContainer';
import { FIGURE_BY_TYPE_DATA } from '../../data/figure-by-type-data';

export function BachataInspireByType(): React.ReactElement {
  return (
    <div>
      <FigureByTypeContainer figuresData={FIGURE_BY_TYPE_DATA} />
    </div>
  );
}
