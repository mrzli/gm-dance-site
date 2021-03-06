import React, { CSSProperties } from 'react';

interface FigureContainerProps {}

const CSS: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '5fr 3fr 2fr 2fr 1fr'
};

export function FigureContainer(
  props: FigureContainerProps
): React.ReactElement {
  return <div style={CSS}>{'FigureContainer'}</div>;
}
