export enum FigureHold {
  Open = 'Open',
  Closed = 'Closed',
  SemiClosed = 'SemiClosed',
  RightToRight = 'RightToRight'
}

export const MAP_FIGURE_HOLD_TO_TEXT = new Map<FigureHold, string>([
  [FigureHold.Open, 'Open'],
  [FigureHold.Closed, 'Closed'],
  [FigureHold.SemiClosed, 'Semi Closed'],
  [FigureHold.RightToRight, 'Right to Right']
]);
