import React from 'react';
import { Drawer } from '@material-ui/core';

interface MainMenuProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

export function MainMenu(props: MainMenuProps): React.ReactElement {
  return (
    <Drawer anchor={'left'} open={props.open} onClose={props.onClose}>
      Content
    </Drawer>
  );
}
