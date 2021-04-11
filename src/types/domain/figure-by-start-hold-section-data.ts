import { FigureByStartHoldData } from './figure-by-start-hold-data';

export interface FigureByStartHoldSectionData {
  readonly startHold: string;
  readonly figures: readonly FigureByStartHoldData[];
}
