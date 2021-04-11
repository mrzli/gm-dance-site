import React from 'react';
import { FigureContainerHeaderItem } from './FigureContainerHeaderItem';

export function FigureContainerHeader(): React.ReactElement {
  return (
    <>
      <FigureContainerHeaderItem row={1} column={1} text={'#'} />
      <FigureContainerHeaderItem row={1} column={2} text={'Opis'} />
      <FigureContainerHeaderItem row={1} column={3} text={'Početno držanje'} />
      <FigureContainerHeaderItem row={1} column={4} text={'Završno držanje'} />
      <FigureContainerHeaderItem row={1} column={5} text={'Napomena'} />
      <FigureContainerHeaderItem row={1} column={6} text={'Video'} />
    </>
  );
}
