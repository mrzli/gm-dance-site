import React, { CSSProperties } from 'react';
import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureByTypeSimpleSectionGroup } from './FigureByTypeSimpleSectionGroup';

interface FigureByTypeContainerSimpleProps {
  readonly figuresData: readonly FigureByTypeSectionGroupData[];
}

const GROUPS_CONTAINER_STYLE: CSSProperties = {
  display: 'grid',
  flexDirection: 'column',
  rowGap: 10
};

export function FigureByTypeSimpleContainer({
  figuresData
}: FigureByTypeContainerSimpleProps): React.ReactElement {
  return (
    <div style={GROUPS_CONTAINER_STYLE}>
      {figuresData.map((group, index) => {
        return (
          <div
            key={index}
            style={{ gridColumnStart: 1, gridRowStart: index + 1 }}
          >
            <FigureByTypeSimpleSectionGroup data={group} groupIndex={index} />
          </div>
        );
      })}
    </div>
  );
}
