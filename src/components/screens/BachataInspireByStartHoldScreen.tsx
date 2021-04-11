import React from 'react';
import { FigureByStartHoldContainer } from '../domain/figures-by-start-hold/FigureByStartHoldContainer';
import figuresData from '../../data/figures-by-start-hold-data.json';

export function BachataInspireByStartHoldScreen(): React.ReactElement {
  return (
    <div>
      <FigureByStartHoldContainer figuresData={figuresData} />
    </div>
  );
}
