import React, { CSSProperties } from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';
import { Typography } from '@material-ui/core';
import { FigureByTypeSimpleVariationRow } from './FigureByTypeSimpleVariationRow';
import { getSectionTitle } from '../util/by-type-util';
import { FigureByTypeVariation } from '../../../types/domain/figure-by-type/figure-by-type-variation';
import { FigureByTypeVariationSimple } from '../../../types/domain/figure-by-type/figure-by-type-variation-simple';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

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
  const variations = getSimpleVariations(data.variations);

  return (
    <div style={VARIATIONS_CONTAINER_STYLE}>
      <Typography
        style={{
          fontWeight: 'bold',
          marginBottom: 6
        }}
      >
        {getSectionTitle(groupIndex, sectionIndex, data.title)}
      </Typography>
      {variations.map((variation, index) => {
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

function getSimpleVariations(
  variations: readonly FigureByTypeVariation[]
): readonly FigureByTypeVariationSimple[] {
  const mapBySimpleText = variations.reduce((acc, variation) => {
    if (variation.simpleText === undefined) {
      return acc;
    }

    const key = variation.simpleText;
    if (acc.has(key)) {
      const existingVariations = acc.get(
        key
      ) as readonly FigureByTypeVariation[];
      const updatedVariations = existingVariations.concat(variation);
      acc.set(key, updatedVariations);
    } else {
      acc.set(key, [variation]);
    }

    return acc;
  }, new Map<string, readonly FigureByTypeVariation[]>());

  return Array.from(mapBySimpleText.entries()).map((simpleVariationPair) => {
    const simpleVariationList = simpleVariationPair[1];
    const videos = simpleVariationList.reduce((acc, variation) => {
      variation.videos.forEach((v) => {
        acc.add(v);
      });
      return acc;
    }, new Set<FigureVideo>());
    return { description: simpleVariationPair[0], videos: Array.from(videos) };
  });
}
