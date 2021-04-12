import React, { CSSProperties } from 'react';
import { FigureByStartHoldSectionData } from '../../../types/domain/figure-by-start-hold/figure-by-start-hold-section-data';
import { FigureByStartHoldSection } from './FigureByStartHoldSection';
import { FigureByStartHoldContainerHeader } from './FigureByStartHoldContainerHeader';

interface FigureContainerProps {
  readonly figuresData: readonly FigureByStartHoldSectionData[];
}

const CSS: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'auto 5fr 2fr 2fr 2fr 2fr',
  // rowGap: 8,
  // columnGap: 10,
  lineHeight: 1.1
};

interface SectionStartingData {
  readonly startingGridRow: number;
  readonly startingFigureNumber: number;
}

export function FigureByStartHoldContainer({
  figuresData
}: FigureContainerProps): React.ReactElement {
  const sectionsStartingData = getSectionsStartingData(figuresData);
  return (
    <div style={CSS}>
      <FigureByStartHoldContainerHeader />
      {figuresData.map((item, index) => {
        return (
          <FigureByStartHoldSection
            key={item.startHold}
            startGridRow={sectionsStartingData[index].startingGridRow}
            startFigureNumber={sectionsStartingData[index].startingFigureNumber}
            figureSectionData={item}
          />
        );
      })}
    </div>
  );
}

function getSectionsStartingData(
  figuresData: readonly FigureByStartHoldSectionData[]
): readonly SectionStartingData[] {
  return figuresData.reduce<readonly SectionStartingData[]>(
    (acc, item, index, array) => {
      if (index === 0) {
        return [
          {
            startingGridRow: 2, // grid indexing starts at 1, and 1 more to account for main data header
            startingFigureNumber: 1
          }
        ];
      } else {
        const previousSectionStartingData = acc[acc.length - 1];
        const previousSectionFigureCount = array[index - 1].figures.length;
        const currentStartingGridRow =
          previousSectionStartingData.startingGridRow +
          previousSectionFigureCount +
          1; // +1 to account for startHold row
        const currentStartingFigureNumber =
          previousSectionStartingData.startingFigureNumber +
          previousSectionFigureCount;
        return acc.concat({
          startingGridRow: currentStartingGridRow,
          startingFigureNumber: currentStartingFigureNumber
        });
      }
    },
    []
  );
}
