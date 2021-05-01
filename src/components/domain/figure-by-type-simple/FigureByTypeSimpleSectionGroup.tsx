import React, { CSSProperties } from 'react';
import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { Typography } from '@material-ui/core';
import { FigureByTypeSimpleSection } from './FigureByTypeSimpleSection';
import { padNonNegativeInteger } from '../../../utils/generic';

interface FigureByTypeSimpleSectionGroupProps {
  readonly data: FigureByTypeSectionGroupData;
  readonly groupIndex: number;
}

const SECTIONS_CONTAINER_STYLE: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #AAAAAA',
  borderRadius: 6,
  padding: 10
};

export function FigureByTypeSimpleSectionGroup({
  data,
  groupIndex
}: FigureByTypeSimpleSectionGroupProps): React.ReactElement {
  return (
    <div style={SECTIONS_CONTAINER_STYLE}>
      <Typography variant={'h6'} style={{ marginBottom: 10 }}>
        {`${padNonNegativeInteger(groupIndex + 1, 2)} - ${data.title}`}
      </Typography>
      {data.sections.map((section, index) => {
        return (
          <FigureByTypeSimpleSection
            key={index}
            data={section}
            groupIndex={groupIndex}
            sectionIndex={index}
          />
        );
      })}
    </div>
  );
}
