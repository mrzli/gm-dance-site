import React, { CSSProperties } from 'react';
import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureByTypeSectionGroup } from './FigureByTypeSectionGroup';

interface FigureByTypeContainerProps {
  readonly figuresData: readonly FigureByTypeSectionGroupData[];
}

const GROUPS_CONTAINER_STYLE: CSSProperties = {
  display: 'grid',
  flexDirection: 'column',
  rowGap: 10
};

export function FigureByTypeContainer({
  figuresData
}: FigureByTypeContainerProps): React.ReactElement {
  return (
    <div style={GROUPS_CONTAINER_STYLE}>
      {figuresData.map((group, index) => {
        return (
          <div
            key={index}
            style={{ gridColumnStart: 1, gridRowStart: index + 1 }}
          >
            <FigureByTypeSectionGroup data={group} groupIndex={index} />
          </div>
        );
      })}
    </div>
  );
}
