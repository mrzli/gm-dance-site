import React from 'react';
import { FigureContainerHeaderItem } from './FigureContainerHeaderItem';

export function FigureContainerHeader(): React.ReactElement {
  return (
    <>
      <FigureContainerHeaderItem row={1} column={1} text={'Opis'} />
      <FigureContainerHeaderItem row={1} column={2} text={'Početno držanje'} />
      <FigureContainerHeaderItem row={1} column={3} text={'Završno držanje'} />
      <FigureContainerHeaderItem row={1} column={4} text={'Napomena'} />
      <FigureContainerHeaderItem row={1} column={5} text={'Video'} />
    </>
  );
}
