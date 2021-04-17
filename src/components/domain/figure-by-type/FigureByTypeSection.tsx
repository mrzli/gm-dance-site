import React, { CSSProperties, useCallback } from 'react';
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
  readonly isExpanded: boolean;
  readonly onExpandedChange: (expanded: boolean) => void;
}

const VARIATIONS_CONTAINER_STYLE: CSSProperties = {
  flexDirection: 'column'
};

export function FigureByTypeSection({
  data,
  isExpanded,
  onExpandedChange
}: FigureByTypeSectionProps): React.ReactElement {
  const onExpandedChangeCallback = useCallback(
    (_event: unknown, expanded: boolean) => {
      onExpandedChange(expanded);
    },
    [onExpandedChange]
  );

  return (
    <div>
      <Accordion expanded={isExpanded} onChange={onExpandedChangeCallback}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          {data.title}
        </AccordionSummary>
        <AccordionDetails style={VARIATIONS_CONTAINER_STYLE}>
          {data.variations.map((variation, index) => {
            return <FigureVariationRow key={index} variation={variation} />;
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
