import React from 'react';
import { FigureByStartHoldContainerHeaderItem } from './FigureByStartHoldContainerHeaderItem';

export function FigureByStartHoldContainerHeader(): React.ReactElement {
  return (
    <>
      <FigureByStartHoldContainerHeaderItem row={1} column={1} text={'#'} />
      <FigureByStartHoldContainerHeaderItem row={1} column={2} text={'Opis'} />
      <FigureByStartHoldContainerHeaderItem
        row={1}
        column={3}
        text={'Početno držanje'}
      />
      <FigureByStartHoldContainerHeaderItem
        row={1}
        column={4}
        text={'Završno držanje'}
      />
      <FigureByStartHoldContainerHeaderItem
        row={1}
        column={5}
        text={'Napomena'}
      />
      <FigureByStartHoldContainerHeaderItem row={1} column={6} text={'Video'} />
    </>
  );
}
