import React, { CSSProperties, useCallback, useState } from 'react';
import { AppBar, Container } from '@material-ui/core';
import { ScreenRoutes } from './ScreenRoutes';
import { MainMenu } from './MainMenu';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { Header } from './Header';

const CONTAINER_STYLES: CSSProperties = {
  padding: '10px 10px 20px 10px'
};

export function Layout(): React.ReactElement {
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
      <AppBar position={'static'}>
        <Header onMenuOpen={onMenuOpen} />
      </AppBar>
      <MainMenu open={menuOpen} onClose={onMenuClose} onNavigate={onNavigate} />
      <Container maxWidth={false} style={CONTAINER_STYLES}>
        <main>
          <ScreenRoutes />
        </main>
      </Container>
    </div>
  );
}
