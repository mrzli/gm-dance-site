import React, { useCallback, useState } from 'react';
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

export function Layout(props: LayoutProps): React.ReactElement {
  const classes = useStyles(props, stylesCallback);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const onMenuOpen = useCallback(() => {
    setMenuOpen(true);
  }, []);
  const onMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

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
      <MainMenu open={menuOpen} onClose={onMenuClose} />
      <Container maxWidth={false} style={{ paddingTop: 10 }}>
        <main>
          <ScreenRoutes />
        </main>
      </Container>
    </div>
  );
}
