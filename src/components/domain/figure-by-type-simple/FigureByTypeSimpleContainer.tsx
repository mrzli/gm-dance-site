import React, { CSSProperties, useCallback, useState } from 'react';
import { Key } from 'ts-key-enum';
import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureByTypeSimpleSectionGroup } from './FigureByTypeSimpleSectionGroup';
import { FigureByTypeSimpleVisibilityType } from '../../../types/domain/figure-by-type/enums/figure-by-type-simple-visibility-type';

interface FigureByTypeContainerSimpleProps {
  readonly figuresData: readonly FigureByTypeSectionGroupData[];
}

const GROUPS_CONTAINER_STYLE: CSSProperties = {
  display: 'grid',
  flexDirection: 'column',
  rowGap: 10,
  outline: 'none'
};

const VISIBILITY_TYPES: readonly FigureByTypeSimpleVisibilityType[] = [
  FigureByTypeSimpleVisibilityType.All,
  FigureByTypeSimpleVisibilityType.None,
  FigureByTypeSimpleVisibilityType.DownToSectionGroups,
  FigureByTypeSimpleVisibilityType.DownToSections
];

export function FigureByTypeSimpleContainer({
  figuresData
}: FigureByTypeContainerSimpleProps): React.ReactElement {
  const [visibilityTypeIndex, setVisibilityTypeIndex] = useState<number>(0);

  const onKeyPressCallback = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      onKeyPress(event, setVisibilityTypeIndex);
    },
    [setVisibilityTypeIndex]
  );

  return (
    <div
      style={GROUPS_CONTAINER_STYLE}
      onKeyDown={onKeyPressCallback}
      tabIndex={-1}
    >
      {figuresData.map((group, index) => {
        return (
          <div
            key={index}
            style={{ gridColumnStart: 1, gridRowStart: index + 1 }}
          >
            <FigureByTypeSimpleSectionGroup
              data={group}
              groupIndex={index}
              visibilityType={VISIBILITY_TYPES[visibilityTypeIndex]}
            />
          </div>
        );
      })}
    </div>
  );
}

function onKeyPress(
  event: React.KeyboardEvent<HTMLElement>,
  setVisibilityTypeIndex: React.Dispatch<React.SetStateAction<number>>
): void {
  if (event.key === Key.Shift) {
    setVisibilityTypeIndex((s) => (s + 1) % VISIBILITY_TYPES.length);
  }
}
