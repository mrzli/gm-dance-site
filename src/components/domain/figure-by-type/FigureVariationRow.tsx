import React from 'react';
import chroma from 'chroma-js';
import { FigureByTypeVariation } from '../../../types/domain/figure-by-type/figure-by-type-variation';
import {
  Avatar,
  Chip,
  createStyles,
  StyleRules,
  Theme
} from '@material-ui/core';
import {
  cyan,
  grey,
  green,
  lightBlue,
  orange,
  red,
  indigo
} from '@material-ui/core/colors';
import { emptyFn } from '../../../utils/generic-function-utils';
import { useStyles } from '../../../utils/ui-hooks';
import {
  FigureLabel,
  MAP_FIGURE_LABEL_TO_TEXT
} from '../../../types/domain/figure-by-type/enums/figure-label';
import { MAP_FIGURE_HOLD_TO_TEXT } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { MAP_FIGURE_VIDEO_TO_TEXT } from '../../../types/domain/figure-by-type/enums/figure-video';
import { ClassNameMap, CSSProperties } from '@material-ui/styles';

interface FigureVariationRowProps {
  readonly variation: FigureByTypeVariation;
}

type ClassKey =
  | 'container'
  | 'holdChip'
  | 'holdChipAvatar'
  | 'labelGroupChip'
  | 'labelGroupChipAvatar'
  | 'labelPeriodChip'
  | 'labelPeriodChipAvatar'
  | 'labelMovementChip'
  | 'labelMovementChipAvatar'
  | 'labelTurnChip'
  | 'labelTurnChipAvatar'
  | 'videoChip'
  | 'videoChipAvatar';

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
): StyleRules<ClassKey, FigureVariationRowProps> {
  const holdChipColor = green[300];
  const labelGroupChipColor = lightBlue[400];
  const labelPeriodChipColor = orange[400];
  const labelMovementChipColor = indigo[400];
  const labelTurnChipColor = red[400];
  const videoChipColor = grey[300];

  return createStyles<ClassKey, FigureVariationRowProps>({
    container: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr 2fr 1fr',
      columnGap: 10,
      backgroundColor: (props) =>
        props.variation.isNew === true ? cyan[300] : undefined
    },
    holdChip: createChipStyles(theme, holdChipColor),
    holdChipAvatar: createChipAvatarStyles(theme, holdChipColor),
    labelGroupChip: createChipStyles(theme, labelGroupChipColor),
    labelGroupChipAvatar: createChipAvatarStyles(theme, labelGroupChipColor),
    labelPeriodChip: createChipStyles(theme, labelPeriodChipColor),
    labelPeriodChipAvatar: createChipAvatarStyles(theme, labelPeriodChipColor),
    labelMovementChip: createChipStyles(theme, labelMovementChipColor),
    labelMovementChipAvatar: createChipAvatarStyles(
      theme,
      labelMovementChipColor
    ),
    labelTurnChip: createChipStyles(theme, labelTurnChipColor),
    labelTurnChipAvatar: createChipAvatarStyles(theme, labelTurnChipColor),
    videoChip: createChipStyles(theme, videoChipColor),
    videoChipAvatar: createChipAvatarStyles(theme, videoChipColor)
  });
}

export function FigureVariationRow(
  props: FigureVariationRowProps
): React.ReactElement {
  const classes: ClassNameMap<ClassKey> = useStyles(props, stylesCallback);

  const { variation } = props;

  return (
    <div className={classes.container}>
      <div style={{ gridRowStart: 1, gridColumnStart: 1 }}>
        {variation.description}
      </div>
      <div style={{ gridRowStart: 1, gridColumnStart: 2 }}>
        <Chip
          className={classes.holdChip}
          avatar={<Avatar className={classes.holdChipAvatar}>S</Avatar>}
          label={MAP_FIGURE_HOLD_TO_TEXT.get(variation.startHold)}
          size={'small'}
          onClick={emptyFn}
        />
        <Chip
          className={classes.holdChip}
          avatar={<Avatar className={classes.holdChipAvatar}>E</Avatar>}
          label={MAP_FIGURE_HOLD_TO_TEXT.get(variation.endHold)}
          size={'small'}
          onClick={emptyFn}
        />
      </div>
      <div style={{ gridRowStart: 1, gridColumnStart: 3 }}>
        {variation.labels.map((label, index) => {
          return getLabelChipElement(label, index, classes);
        })}
      </div>
      <div style={{ gridRowStart: 1, gridColumnStart: 4 }}>
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

interface LabelChipData {
  readonly chipClassName: ClassKey;
  readonly avatarClassName: ClassKey;
  readonly avatarCharacter: string;
}

function getLabelChipElement(
  label: FigureLabel,
  index: number,
  classes: ClassNameMap<ClassKey>
): React.ReactElement {
  const chipData = getFigureLabelChipData(label);

  return (
    <Chip
      key={index}
      className={classes[chipData.chipClassName]}
      avatar={
        <Avatar className={classes[chipData.avatarClassName]}>
          {chipData.avatarCharacter}
        </Avatar>
      }
      label={MAP_FIGURE_LABEL_TO_TEXT.get(label)}
      size={'small'}
      onClick={emptyFn}
    />
  );
}

function getFigureLabelChipData(figureLabel: FigureLabel): LabelChipData {
  if (figureLabel.startsWith('Group')) {
    return {
      chipClassName: 'labelGroupChip',
      avatarClassName: 'labelGroupChipAvatar',
      avatarCharacter: 'G'
    };
  } else if (figureLabel.startsWith('Period')) {
    return {
      chipClassName: 'labelPeriodChip',
      avatarClassName: 'labelPeriodChipAvatar',
      avatarCharacter: 'P'
    };
  } else if (figureLabel.startsWith('Movement')) {
    return {
      chipClassName: 'labelMovementChip',
      avatarClassName: 'labelMovementChipAvatar',
      avatarCharacter: 'M'
    };
  } else if (figureLabel.startsWith('Turn')) {
    return {
      chipClassName: 'labelTurnChip',
      avatarClassName: 'labelTurnChipAvatar',
      avatarCharacter: 'T'
    };
  } else {
    throw new Error(`Invalid figure label: '${figureLabel}'`);
  }
}
