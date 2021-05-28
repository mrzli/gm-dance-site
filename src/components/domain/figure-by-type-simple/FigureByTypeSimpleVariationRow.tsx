import React from 'react';
import chroma from 'chroma-js';
import {
  Avatar,
  Chip,
  createStyles,
  StyleRules,
  Theme
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { emptyFn } from '../../../utils/generic-function-utils';
import { useStyles } from '../../../utils/ui-hooks';
import { MAP_FIGURE_VIDEO_TO_TEXT } from '../../../types/domain/figure-by-type/enums/figure-video';
import { ClassNameMap, CSSProperties } from '@material-ui/styles';
import { FigureByTypeVariationSimple } from '../../../types/domain/figure-by-type/figure-by-type-variation-simple';
import { FigureByTypeSimpleVisibilityType } from '../../../types/domain/figure-by-type/enums/figure-by-type-simple-visibility-type';

interface FigureByTypeSimpleVariationRowProps {
  readonly variation: FigureByTypeVariationSimple;
  readonly visibilityType: FigureByTypeSimpleVisibilityType;
}

type ClassKey = 'container' | 'videoChip' | 'videoChipAvatar';

function createChipStyles(theme: Theme, baseColor: string): CSSProperties {
  const highlightColor = chroma(baseColor).darken().hex();
  return {
    backgroundColor: baseColor,
    color: theme.palette.getContrastText(baseColor),
    margin: 2,
    '&:hover': {
      backgroundColor: highlightColor,
      color: theme.palette.getContrastText(highlightColor)
    },
    '&:focus': {
      backgroundColor: baseColor,
      color: theme.palette.getContrastText(baseColor)
    }
  };
}

function createChipAvatarStyles(
  theme: Theme,
  baseColor: string
): CSSProperties {
  const avatarColor = chroma(baseColor).brighten().hex();
  return {
    backgroundColor: avatarColor,
    color: theme.palette.getContrastText(avatarColor)
  };
}

function stylesCallback(
  theme: Theme
): StyleRules<ClassKey, FigureByTypeSimpleVariationRowProps> {
  const videoChipColor = grey[300];

  return createStyles<ClassKey, FigureByTypeSimpleVariationRowProps>({
    container: {
      display: 'grid',
      gridTemplateColumns: '4fr 2fr',
      columnGap: 10,
      visibility: (props) =>
        [FigureByTypeSimpleVisibilityType.All].includes(props.visibilityType)
          ? 'visible'
          : 'hidden'
    },
    videoChip: createChipStyles(theme, videoChipColor),
    videoChipAvatar: createChipAvatarStyles(theme, videoChipColor)
  });
}

export function FigureByTypeSimpleVariationRow(
  props: FigureByTypeSimpleVariationRowProps
): React.ReactElement {
  const classes: ClassNameMap<ClassKey> = useStyles(props, stylesCallback);

  const { variation } = props;

  return (
    <div className={classes.container}>
      <div style={{ gridRowStart: 1, gridColumnStart: 1 }}>
        {variation.description}
      </div>
      <div style={{ gridRowStart: 1, gridColumnStart: 2 }}>
        {variation.videos.map((video, index) => {
          return (
            <Chip
              key={index}
              className={classes.videoChip}
              avatar={<Avatar className={classes.videoChipAvatar}>V</Avatar>}
              label={MAP_FIGURE_VIDEO_TO_TEXT.get(video)}
              size={'small'}
              onClick={emptyFn}
            />
          );
        })}
      </div>
    </div>
  );
}
