import React from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';

interface FigureByTypeSectionProps {
  readonly data: FigureByTypeSectionData;
}

export function FigureByTypeSection({
  data
}: FigureByTypeSectionProps): React.ReactElement {
  return (
    <div>
      <div>{'FigureByTypeItem'}</div>
    </div>
  );
}
