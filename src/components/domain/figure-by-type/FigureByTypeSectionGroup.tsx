import React, { CSSProperties } from 'react';
import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { Typography } from '@material-ui/core';
import { FigureByTypeSection } from './FigureByTypeSection';

interface FigureByTypeSectionGroupProps {
  readonly data: FigureByTypeSectionGroupData;
}

const SECTIONS_CONTAINER_STYLE: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #AAAAAA',
  borderRadius: 6,
  padding: 10
};

export function FigureByTypeSectionGroup({
  data
}: FigureByTypeSectionGroupProps): React.ReactElement {
  return (
    <div style={SECTIONS_CONTAINER_STYLE}>
      <Typography variant={'h6'} style={{ marginBottom: 10 }}>
        {data.title}
      </Typography>
      {data.sections.map((section, index) => {
        return <FigureByTypeSection key={index} data={section} />;
      })}
    </div>
  );
}
