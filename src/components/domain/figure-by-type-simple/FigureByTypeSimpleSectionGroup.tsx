import React, { CSSProperties, useCallback, useState } from 'react';
import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { Typography } from '@material-ui/core';
import { FigureByTypeSimpleSection } from './FigureByTypeSimpleSection';
import { getSectionGroupTitle } from '../util/by-type-util';
import { FigureByTypeSimpleVisibilityType } from '../../../types/domain/figure-by-type/enums/figure-by-type-simple-visibility-type';

interface FigureByTypeSimpleSectionGroupProps {
  readonly data: FigureByTypeSectionGroupData;
  readonly groupIndex: number;
  readonly visibilityType: FigureByTypeSimpleVisibilityType;
}

const SECTIONS_CONTAINER_STYLE: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #AAAAAA',
  borderRadius: 6,
  padding: 10
};

export function FigureByTypeSimpleSectionGroup({
  data,
  groupIndex,
  visibilityType
}: FigureByTypeSimpleSectionGroupProps): React.ReactElement {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const onMouseEnterCallback = useCallback(() => {
    setIsMouseOver(true);
  }, [setIsMouseOver]);

  const onMouseLeaveCallback = useCallback(() => {
    setIsMouseOver(false);
  }, [setIsMouseOver]);

  const finalVisibilityType = isMouseOver
    ? FigureByTypeSimpleVisibilityType.All
    : visibilityType;

  return (
    <div
      style={SECTIONS_CONTAINER_STYLE}
      onMouseEnter={onMouseEnterCallback}
      onMouseLeave={onMouseLeaveCallback}
    >
      <Typography
        variant={'h6'}
        style={{
          marginBottom: 10,
          visibility: [
            FigureByTypeSimpleVisibilityType.All,
            FigureByTypeSimpleVisibilityType.DownToSectionGroups,
            FigureByTypeSimpleVisibilityType.DownToSections
          ].includes(finalVisibilityType)
            ? 'visible'
            : 'hidden'
        }}
      >
        {getSectionGroupTitle(groupIndex, data.groupTitle)}
      </Typography>
      {data.sections.map((section, index) => {
        return (
          <FigureByTypeSimpleSection
            key={index}
            data={section}
            groupIndex={groupIndex}
            sectionIndex={index}
            visibilityType={finalVisibilityType}
          />
        );
      })}
    </div>
  );
}
