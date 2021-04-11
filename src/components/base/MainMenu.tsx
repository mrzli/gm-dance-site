import React, { CSSProperties, useMemo } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { ROUTE_DATA } from '../routes/route-data';
import { Fn0 } from '../../types/generic/generic-types';

interface MainMenuProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly onNavigate: (url: string) => void;
}

const LIST_ITEM_STYLES: CSSProperties = {
  width: 200,
  cursor: 'pointer'
};

export function MainMenu({
  open,
  onClose,
  onNavigate
}: MainMenuProps): React.ReactElement {
  const onNavigateList = useMemo<readonly Fn0<void>[]>(() => {
    return ROUTE_DATA.map((pair) => {
      return () => {
        onNavigate(pair.url);
      };
    });
  }, [onNavigate]);

  return (
    <Drawer anchor={'left'} open={open} onClose={onClose}>
      <List>
        {ROUTE_DATA.map((pair, index) => (
          <ListItem
            key={index}
            style={LIST_ITEM_STYLES}
            onClick={onNavigateList[index]}
          >
            <ListItemText primary={pair.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
