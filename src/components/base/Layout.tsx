import React, { CSSProperties, useCallback, useState } from 'react';
import {
  AppBar,
  Container,
  createStyles,
  IconButton,
  StyleRules,
  SvgIcon,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';
import { useStyles } from '../../utils/ui-hooks';
import { ScreenRoutes } from './ScreenRoutes';
import { Menu } from 'mdi-material-ui';
import { MainMenu } from './MainMenu';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

interface LayoutProps {}

type ClassKey = 'toolbar' | 'menuButton' | 'title';

function stylesCallback(theme: Theme): StyleRules<ClassKey, LayoutProps> {
  return createStyles<ClassKey, LayoutProps>({
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

const CONTAINER_STYLES: CSSProperties = {
  paddingTop: 10
};

export function Layout(props: LayoutProps): React.ReactElement {
  const classes = useStyles(props, stylesCallback);

  const history: History = useHistory();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const onMenuOpen = useCallback(() => {
    setMenuOpen(true);
  }, []);
  const onMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const onNavigate = useCallback(
    (url: string) => {
      setMenuOpen(false);
      history.push(url);
    },
    [history]
  );

  return (
    <div>
      <AppBar position={'fixed'}>
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
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <MainMenu open={menuOpen} onClose={onMenuClose} onNavigate={onNavigate} />
      <Container maxWidth={false} style={CONTAINER_STYLES}>
        <main>
          <ScreenRoutes />
        </main>
      </Container>
    </div>
  );
}
