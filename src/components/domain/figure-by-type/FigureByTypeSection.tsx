import React, { CSSProperties } from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';
import { Typography } from '@material-ui/core';
import { FigureVariationRow } from './FigureVariationRow';
import { padNonNegativeInteger } from '../../../utils/generic';
import { FigureByTypeVariation } from '../../../types/domain/figure-by-type/figure-by-type-variation';
import { FigureByTypeVariationExplicit } from '../../../types/domain/figure-by-type/figure-by-type-variation-explicit';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';

interface FigureByTypeSectionProps {
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

export function FigureByTypeSection({
  data,
  groupIndex,
  sectionIndex
}: FigureByTypeSectionProps): React.ReactElement {
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
        const explicitVariation = getExplicitVariationData(variation);
        return (
          <>
            <FigureVariationRow key={index} variation={explicitVariation} />
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

function getExplicitVariationData(
  variation: FigureByTypeVariation
): FigureByTypeVariationExplicit {
  return {
    ...variation,
    startHold: variation.startHold ?? FigureHold.Unknown,
    endHold: variation.endHold ?? FigureHold.Unknown,
    labels: variation.labels ?? [],
    isNew: variation.isNew ?? false
  };
}
