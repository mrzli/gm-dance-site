import React, { useCallback, useState } from 'react';
import { FigureByTypeSectionData } from '../../../types/domain/figure-by-type/figure-by-type-section-data';
import { FigureByTypeSection } from './FigureByTypeSection';
import { Key } from 'ts-key-enum';

interface FigureByTypeContainerProps {
  readonly figuresData: readonly FigureByTypeSectionData[];
}

export function FigureByTypeContainer({
  figuresData
}: FigureByTypeContainerProps): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [expandedIndex, setExpandedIndex] = useState<number | undefined>(
    undefined
  );

  const onKeyDownCallback = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (
        ![Key.ArrowUp, Key.ArrowDown].includes(event.key as Key) ||
        figuresData.length === 0
      ) {
        return;
      }

      setExpandedIndex((s) => {
        switch (event.key) {
          case Key.ArrowUp:
            return s !== undefined
              ? (s - 1 + figuresData.length) % figuresData.length
              : figuresData.length - 1;
          case Key.ArrowDown:
            return s !== undefined ? (s + 1) % figuresData.length : 0;
          default:
            return s;
        }
      });
    },
    [setExpandedIndex, figuresData]
  );

  return (
    <div onKeyDown={onKeyDownCallback}>
      {figuresData.map((figureItem, index) => {
        return (
          <FigureByTypeSection
            key={index}
            data={figureItem}
            isExpanded={true} //{expandedIndex === index}
            onExpandedChange={(expanded) => {
              setExpandedIndex(expanded ? index : undefined);
            }}
          />
        );
      })}
    </div>
  );
}
