import React, { Fragment } from 'react';
import { FigureSectionData } from '../../types/domain/figure-section-data';
import { Link } from '@material-ui/core';

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
          gridColumnEnd: 6,
          paddingTop: 20,
          paddingBottom: 5,
          borderBottom: '1px solid black',
          fontWeight: 'bold'
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
              <Link href={`#${figure.startHold}`}>{figure.startHold}</Link>
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 3
              }}
            >
              <Link href={`#${figure.endHold}`}>{figure.endHold}</Link>
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
              {figure.videos.join(', ')}
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
