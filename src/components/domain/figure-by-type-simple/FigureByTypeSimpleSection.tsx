import React, { CSSProperties } from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';
import { Typography } from '@material-ui/core';
import { FigureByTypeSimpleVariationRow } from './FigureByTypeSimpleVariationRow';
import { getSectionTitle } from '../util/by-type-util';
import { FigureByTypeVariation } from '../../../types/domain/figure-by-type/figure-by-type-variation';
import { FigureByTypeVariationSimple } from '../../../types/domain/figure-by-type/figure-by-type-variation-simple';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';
import { FigureByTypeSimpleVisibilityType } from '../../../types/domain/figure-by-type/enums/figure-by-type-simple-visibility-type';

interface FigureByTypeSimpleSectionProps {
  readonly data: FigureByTypeSectionData;
  readonly groupIndex: number;
  readonly sectionIndex: number;
  readonly visibilityType: FigureByTypeSimpleVisibilityType;
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

function FigureByTypeSimpleSectionInternal({
  data,
  groupIndex,
  sectionIndex,
  visibilityType
}: FigureByTypeSimpleSectionProps): React.ReactElement {
  const variations = getSimpleVariations(data.variations);

  return (
    <div style={VARIATIONS_CONTAINER_STYLE}>
      <Typography
        style={{
          fontWeight: 'bold',
          marginBottom: 6,
          visibility: [
            FigureByTypeSimpleVisibilityType.All,
            FigureByTypeSimpleVisibilityType.DownToSections
          ].includes(visibilityType)
            ? 'visible'
            : 'hidden'
        }}
      >
        {getSectionTitle(groupIndex, sectionIndex, data.title)}
      </Typography>
      {variations.map((variation, index) => {
        return (
          <React.Fragment key={index}>
            <FigureByTypeSimpleVariationRow
              variation={variation}
              visibilityType={visibilityType}
            />
            {index !== data.variations.length - 1 ? (
              <hr style={HR_STYLE} />
            ) : undefined}
          </React.Fragment>
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
    const videosSet = simpleVariationList.reduce((acc, variation) => {
      variation.videos.forEach((v) => {
        acc.add(v);
      });
      return acc;
    }, new Set<FigureVideo>());
    const videos = Array.from(videosSet).sort((video1, video2) =>
      video1.localeCompare(video2)
    );
    return { description: simpleVariationPair[0], videos };
  });
}

export const FigureByTypeSimpleSection = React.memo(
  FigureByTypeSimpleSectionInternal
);
