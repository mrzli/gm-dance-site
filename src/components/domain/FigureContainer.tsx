import React, { CSSProperties } from 'react';
import { FigureSectionData } from '../../types/domain/figure-section-data';
import { FigureSection } from './FigureSection';
import { FigureContainerHeader } from './FigureContainerHeader';

interface FigureContainerProps {
  readonly figuresData: readonly FigureSectionData[];
}

const CSS: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '5fr 3fr 2fr 2fr 1fr'
};

export function FigureContainer({
  figuresData
}: FigureContainerProps): React.ReactElement {
  const startingRows = getStartingRows(figuresData);
  return (
    <div style={CSS}>
      <FigureContainerHeader />
      {figuresData.map((item, index) => {
        return (
          <FigureSection
            key={item.startHold}
            startRow={startingRows[index]}
            figureSectionData={item}
          />
        );
      })}
    </div>
  );
}

function getStartingRows(
  figuresData: readonly FigureSectionData[]
): readonly number[] {
  return figuresData.reduce<readonly number[]>((acc, item, index, array) => {
    if (index === 0) {
      return [1]; // 1 to account for figures header
    } else {
      const cumulativeOffset =
        acc[acc.length - 1] + array[index - 1].figures.length + 1; // +1 to account for startHold row
      return acc.concat(cumulativeOffset);
    }
  }, []);
}
