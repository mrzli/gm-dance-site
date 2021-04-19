import React, { CSSProperties } from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';
import { Typography } from '@material-ui/core';
import { FigureVariationRow } from './FigureVariationRow';

interface FigureByTypeSectionProps {
  readonly data: FigureByTypeSectionData;
}

const VARIATIONS_CONTAINER_STYLE: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 10
};

const HR_STYLE: CSSProperties = {
  width: '100%',
  border: '0.5px solid #E0E0E0',
  margin: 0
};

export function FigureByTypeSection({
  data
}: FigureByTypeSectionProps): React.ReactElement {
  return (
    <div style={VARIATIONS_CONTAINER_STYLE}>
      <Typography
        style={{
          fontWeight: 'bold',
          marginBottom: 6
        }}
      >
        {data.title}
      </Typography>
      {data.variations.map((variation, index) => {
        return (
          <>
            <FigureVariationRow key={index} variation={variation} />
            {index !== data.variations.length - 1 ? (
              <hr style={HR_STYLE} />
            ) : undefined}
          </>
        );
      })}
    </div>
  );
}
