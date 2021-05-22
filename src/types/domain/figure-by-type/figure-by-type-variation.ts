import { FigureHold } from './enums/figure-hold';
import { FigureLabel } from './enums/figure-label';
import { FigureVideo } from './enums/figure-video';

export interface FigureByTypeVariation {
  readonly description: string;
  readonly simpleText: string;
  readonly startHold: FigureHold;
  readonly endHold: FigureHold;
  readonly labels: readonly FigureLabel[];
  readonly videos: readonly FigureVideo[];
  readonly isNew?: boolean;
}
