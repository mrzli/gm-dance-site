import React, { Fragment } from 'react';
import { FigureByStartHoldSectionData } from '../../../types/domain/figure-by-start-hold-section-data';
import { Link } from '@material-ui/core';

interface FigureSectionProps {
  readonly startGridRow: number;
  readonly startFigureNumber: number;
  readonly figureSectionData: FigureByStartHoldSectionData;
}

const CELL_PADDING = 5;

export function FigureByStartHoldSection({
  startGridRow,
  startFigureNumber,
  figureSectionData
}: FigureSectionProps): React.ReactElement {
  const { startHold, figures } = figureSectionData;

  return (
    <>
      <div
        id={startHold}
        style={{
          gridRowStart: startGridRow,
          gridColumnStart: 1,
          gridColumnEnd: -1,
          padding: '20px 5px 5px 5px',
          borderBottom: '1px solid black',
          fontWeight: 'bold'
        }}
      >
        {startHold}
      </div>
      {figures.map((figure, index) => {
        const currentRowIndex = startGridRow + index + 1;
        return (
          <Fragment key={index}>
            {index % 2 === 0 ? (
              <div
                style={{
                  gridRowStart: currentRowIndex,
                  gridColumnStart: 1,
                  gridColumnEnd: -1,
                  backgroundColor: '#F0F0F0',
                  padding: CELL_PADDING
                }}
              />
            ) : undefined}
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 1,
                padding: CELL_PADDING,
                textAlign: 'end'
              }}
            >
              {startFigureNumber + index}.
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 2,
                padding: CELL_PADDING
              }}
            >
              {figure.description}
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 3,
                padding: CELL_PADDING
              }}
            >
              <Link href={`#${figure.startHold}`}>{figure.startHold}</Link>
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 4,
                padding: CELL_PADDING
              }}
            >
              <Link href={`#${figure.endHold}`}>{figure.endHold}</Link>
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 5,
                padding: CELL_PADDING
              }}
            >
              {figure.note}
            </div>
            <div
              style={{
                gridRowStart: currentRowIndex,
                gridColumnStart: 6,
                padding: CELL_PADDING
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
