import React from 'react';
import { FigureContainer } from '../domain/FigureContainer';

interface IntroScreenProps {}

export function IntroScreen(props: IntroScreenProps): React.ReactElement {
  return (
    <div>
      <FigureContainer />
    </div>
  );
}
