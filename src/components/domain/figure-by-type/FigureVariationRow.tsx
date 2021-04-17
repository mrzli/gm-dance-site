import React, { CSSProperties } from 'react';
import chroma from 'chroma-js';
import { FigureByTypeVariation } from '../../../types/domain/figure-by-type/figure-by-type-variation';
import {
  Avatar,
  Chip,
  createStyles,
  StyleRules,
  Theme
} from '@material-ui/core';
import { grey, green, lightBlue } from '@material-ui/core/colors';
import { emptyFn } from '../../../utils/generic-function-utils';
import { useStyles } from '../../../utils/ui-hooks';

interface FigureVariationRowProps {
  readonly variation: FigureByTypeVariation;
}

const CONTAINER_STYLE: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '3fr 1fr 1fr 1fr',
  columnGap: 10
};

type ClassKey =
  | 'holdChip'
  | 'holdChipAvatar'
  | 'labelChip'
  | 'labelChipAvatar'
  | 'videoChip'
  | 'videoChipAvatar';

function stylesCallback(
  theme: Theme
): StyleRules<ClassKey, FigureVariationRowProps> {
  const holdChipColor = green[300];
  const holdAvatarColor = chroma(holdChipColor).brighten().hex();

  const labelChipColor = lightBlue[400];
  const labelAvatarColor = chroma(labelChipColor).brighten().hex();

  const videoChipColor = grey[300];
  const videoAvatarColor = chroma(videoChipColor).brighten().hex();

  return createStyles<ClassKey, FigureVariationRowProps>({
    holdChip: {
      backgroundColor: holdChipColor,
      color: theme.palette.getContrastText(holdChipColor),
      margin: 2
    },
    holdChipAvatar: {
      backgroundColor: holdAvatarColor,
      color: theme.palette.getContrastText(holdAvatarColor)
    },
    labelChip: {
      backgroundColor: labelChipColor,
      color: theme.palette.getContrastText(labelChipColor),
      margin: 2
    },
    labelChipAvatar: {
      backgroundColor: labelAvatarColor,
      color: theme.palette.getContrastText(labelAvatarColor)
    },
    videoChip: {
      backgroundColor: videoChipColor,
      color: theme.palette.getContrastText(videoChipColor),
      margin: 2
    },
    videoChipAvatar: {
      backgroundColor: videoAvatarColor,
      color: theme.palette.getContrastText(videoAvatarColor)
    }
  });
}

export function FigureVariationRow(
  props: FigureVariationRowProps
): React.ReactElement {
  const classes = useStyles(props, stylesCallback);

  const { variation } = props;

  return (
    <div style={CONTAINER_STYLE}>
      <div style={{ gridRowStart: 1, gridColumnStart: 1 }}>
        {variation.description}
      </div>
      <div style={{ gridRowStart: 1, gridColumnStart: 2 }}>
        <Chip
          className={classes.holdChip}
          avatar={<Avatar className={classes.holdChipAvatar}>S</Avatar>}
          label={variation.startHold}
          size={'small'}
          onClick={emptyFn}
        />
        <Chip
          className={classes.holdChip}
          avatar={<Avatar className={classes.holdChipAvatar}>E</Avatar>}
          label={variation.endHold}
          size={'small'}
          onClick={emptyFn}
        />
      </div>
      <div style={{ gridRowStart: 1, gridColumnStart: 3 }}>
        {variation.labels.map((label, index) => {
          return (
            <Chip
              key={index}
              className={classes.labelChip}
              avatar={<Avatar className={classes.labelChipAvatar}>L</Avatar>}
              label={label}
              size={'small'}
              onClick={emptyFn}
            />
          );
        })}
      </div>
      <div style={{ gridRowStart: 1, gridColumnStart: 4 }}>
        {variation.videos.map((video, index) => {
          return (
            <Chip
              key={index}
              className={classes.videoChip}
              avatar={<Avatar className={classes.videoChipAvatar}>V</Avatar>}
              label={video}
              size={'small'}
              onClick={emptyFn}
            />
          );
        })}
      </div>
    </div>
  );
}
