import React, { useRef } from 'react';
import { StyleRules, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { useStyles } from '../../utils/ui-hooks';

interface RenderCounterProps {}

type ClassKey = 'root';

function stylesCallback(
  theme: Theme
): StyleRules<ClassKey, RenderCounterProps> {
  return createStyles<ClassKey, RenderCounterProps>({
    root: {
      color: '#1D1D1D',
      border: '1px solid #7676767',
      borderRadius: '50vh',
      backgroundColor: '#D4D4D4',
      position: 'absolute',
      height: 30,
      top: -5,
      right: -5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    }
  });
}

export function RenderCounter(props: RenderCounterProps): React.ReactElement {
  const classes = useStyles(props, stylesCallback);

  const numRenders = useRef<number>(0);
  numRenders.current++;

  return <div className={classes.root}>{numRenders.current}</div>;
}
