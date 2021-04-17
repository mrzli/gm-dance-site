import React, { CSSProperties } from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { FigureVariationRow } from './FigureVariationRow';

interface FigureByTypeSectionProps {
  readonly data: FigureByTypeSectionData;
}

const VARIATIONS_CONTAINER_STYLE: CSSProperties = {
  flexDirection: 'column'
};

export function FigureByTypeSection({
  data
}: FigureByTypeSectionProps): React.ReactElement {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>Summary</AccordionSummary>
        <AccordionDetails style={VARIATIONS_CONTAINER_STYLE}>
          {data.variations.map((variation, index) => {
            return <FigureVariationRow key={index} variation={variation} />;
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
