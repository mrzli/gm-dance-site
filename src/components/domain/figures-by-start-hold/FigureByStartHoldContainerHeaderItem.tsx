import React from 'react';

interface FigureContainerHeaderItemProps {
  readonly row: number;
  readonly column: number;
  readonly text: string;
}

export function FigureByStartHoldContainerHeaderItem({
  row,
  column,
  text
}: FigureContainerHeaderItemProps): React.ReactElement {
  return (
    <div
      style={{
        gridRowStart: row,
        gridColumnStart: column,
        fontWeight: 'bold',
        padding: 5
      }}
    >
      {text}
    </div>
  );
}
