import { FigureVideo } from './enums/figure-video';

export interface FigureByTypeVariationSimple {
  readonly description: string;
  readonly videos: readonly FigureVideo[];
}
