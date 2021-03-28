import React from 'react';
import { FigureContainer } from '../domain/FigureContainer';
import figuresData from '../../data/figures-data.json';

export function BachataInspireScreen(): React.ReactElement {
  return (
    <div>
      <FigureContainer figuresData={figuresData} />
    </div>
  );
}
