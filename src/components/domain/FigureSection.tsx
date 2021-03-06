import React, { Fragment } from 'react';
import { FigureSectionData } from '../../types/domain/figure-section-data';

interface FigureSectionProps {
  readonly startRow: number;
  readonly figureSectionData: FigureSectionData;
}

export function FigureSection({
  startRow,
  figureSectionData
}: FigureSectionProps): React.ReactElement {
  const { startHold, figures } = figureSectionData;

  return (
    <>
      <div
        id={startHold}
        style={{
          gridRowStart: startRow,
          gridColumnStart: 1,
          gridColumnEnd: 5
        }}
      >
        {startHold}
      </div>
      {figures.map((figure, index) => {
        const currentRowIndex = startRow + index + 1;
        return (
          <Fragment key={index}>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 1
              }}
            >
              {figure.description}
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 2
              }}
            >
              {figure.startHold}
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 3
              }}
            >
              {figure.endHold}
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 4
              }}
            >
              {figure.note}
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 5
              }}
            >
              {figure.video}
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
