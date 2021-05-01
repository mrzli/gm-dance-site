import React, { CSSProperties } from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';
import { Typography } from '@material-ui/core';
import { FigureByTypeSimpleVariationRow } from './FigureByTypeSimpleVariationRow';
import { padNonNegativeInteger } from '../../../utils/generic';

interface FigureByTypeSimpleSectionProps {
  readonly data: FigureByTypeSectionData;
  readonly groupIndex: number;
  readonly sectionIndex: number;
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

export function FigureByTypeSimpleSection({
  data,
  groupIndex,
  sectionIndex
}: FigureByTypeSimpleSectionProps): React.ReactElement {
  return (
    <div style={VARIATIONS_CONTAINER_STYLE}>
      <Typography
        style={{
          fontWeight: 'bold',
          marginBottom: 6
        }}
      >
        {getTitle(groupIndex, sectionIndex, data.title)}
      </Typography>
      {data.variations.map((variation, index) => {
        return (
          <>
            <FigureByTypeSimpleVariationRow key={index} variation={variation} />
            {index !== data.variations.length - 1 ? (
              <hr style={HR_STYLE} />
            ) : undefined}
          </>
        );
      })}
    </div>
  );
}

function getTitle(
  groupIndex: number,
  sectionIndex: number,
  title: string
): string {
  const groupString = padNonNegativeInteger(groupIndex + 1, 2);
  const sectionString = padNonNegativeInteger(sectionIndex + 1, 2);

  return `${groupString}.${sectionString} - ${title}`;
}
