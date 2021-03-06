import React from 'react';
import {
  createStyles,
  IconButton,
  StyleRules,
  SvgIcon,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Menu } from 'mdi-material-ui';
import { useStyles } from '../../utils/ui-hooks';

interface HeaderProps {
  readonly onMenuOpen: () => void;
}

type ClassKey = 'toolbar' | 'menuButton' | 'title';

function stylesCallback(theme: Theme): StyleRules<ClassKey, HeaderProps> {
  return createStyles<ClassKey, HeaderProps>({
    toolbar: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  });
}

export function Header(props: HeaderProps): React.ReactElement {
  const { onMenuOpen } = props;

  const classes = useStyles(props, stylesCallback);

  return (
    <header>
      <Toolbar>
        <IconButton
          edge={'start'}
          className={classes.menuButton}
          color={'inherit'}
          aria-label={'menu'}
          onClick={onMenuOpen}
        >
          <SvgIcon component={Menu} fontSize={'large'} />
        </IconButton>
        <Typography variant={'h6'} className={classes.title}>
          Figure
        </Typography>
      </Toolbar>
    </header>
  );
}
