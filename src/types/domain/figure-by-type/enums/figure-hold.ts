export enum FigureHold {
  Open = 'Open',
  Closed = 'Closed',
  SemiClosed = 'SemiClosed',
  LRAndRLClose = 'LRAndRLClose',
  LLOverRR = 'LLOverRR',
  RR = 'RR',
  L_WRWaist__R_WLWaist = 'L_WRWaist__R_WLWaist',
  RLHipToHip__LL__RR_WRShoulder = 'RLHipToHip__LL__RR_WRShoulder'
}

export const MAP_FIGURE_HOLD_TO_TEXT = new Map<FigureHold, string>([
  [FigureHold.Open, 'Open'],
  [FigureHold.Closed, 'Closed'],
  [FigureHold.SemiClosed, 'Semi Closed'],
  [FigureHold.LRAndRLClose, 'LR+RL Close'],
  [FigureHold.LLOverRR, 'LL>RR'],
  [FigureHold.RR, 'RR'],
  [FigureHold.L_WRWaist__R_WLWaist, 'L-WRWaist R-WLWaist'],
  [FigureHold.RLHipToHip__LL__RR_WRShoulder, 'RLHipToHip LL RR-WRShoulder']
]);
