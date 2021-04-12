import { FigureByTypeVariation } from './figure-by-type-variation';

export interface FigureByTypeSectionData {
  readonly title: string;
  readonly variations: readonly FigureByTypeVariation[];
}
