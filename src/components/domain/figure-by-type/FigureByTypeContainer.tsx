import React, { useState } from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';
import { FigureByTypeSection } from './FigureByTypeSection';

interface FigureByTypeContainerProps {
  readonly figuresData: readonly FigureByTypeSectionData[];
}

export function FigureByTypeContainer({
  figuresData
}: FigureByTypeContainerProps): React.ReactElement {
  const [expandedIndex, setExpandedIndex] = useState<number | undefined>(
    undefined
  );

  return (
    <div>
      {figuresData.map((figureItem, index) => {
        return (
          <FigureByTypeSection
            key={index}
            data={figureItem}
            isExpanded={expandedIndex === index}
            onExpandedChange={(expanded) => {
              setExpandedIndex(expanded ? index : undefined);
            }}
          />
        );
      })}
    </div>
  );
}
