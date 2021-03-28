import React, { CSSProperties } from 'react';
import { FigureSectionData } from '../../types/domain/figure-section-data';
import { FigureSection } from './FigureSection';
import { FigureContainerHeader } from './FigureContainerHeader';

interface FigureContainerProps {
  readonly figuresData: readonly FigureSectionData[];
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

export function FigureContainer({
  figuresData
}: FigureContainerProps): React.ReactElement {
  const sectionsStartingData = getSectionsStartingData(figuresData);
  return (
    <div style={CSS}>
      <FigureContainerHeader />
      {figuresData.map((item, index) => {
        return (
          <FigureSection
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
  figuresData: readonly FigureSectionData[]
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
