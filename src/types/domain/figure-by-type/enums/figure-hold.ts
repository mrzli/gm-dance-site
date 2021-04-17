export enum FigureHold {
  Open = 'Open',
  Closed = 'Closed',
  SemiClosed = 'SemiClosed',
  LRPalmOnPalm = 'LRPalmOnPalm',
  LRAndRLClose = 'LRAndRLClose',
  LLOverRR = 'LLOverRR',
  RR = 'RR',
  L_WRWaist__R_WLWaist = 'L_WRWaist__R_WLWaist',
  R90__LR__RL_WRWaist = 'R90__LR__RL_WRWaist',
  L90__LR_WLShoulder__RL = 'L90__LR_WLShoulder__RL',
  RLHipToHip__LL__RR_WRShoulder = 'RLHipToHip__LL__RR_WRShoulder'
}

export const MAP_FIGURE_HOLD_TO_TEXT = new Map<FigureHold, string>([
  [FigureHold.Open, 'Open'],
  [FigureHold.Closed, 'Closed'],
  [FigureHold.SemiClosed, 'Semi-Closed'],
  [FigureHold.LRPalmOnPalm, 'LR-PalmOnPalm'],
  [FigureHold.LRAndRLClose, 'LR+RL-Close'],
  [FigureHold.LLOverRR, 'LL>RR'],
  [FigureHold.RR, 'RR'],
  [FigureHold.L_WRWaist__R_WLWaist, 'L-WRWaist R-WLWaist'],
  [FigureHold.R90__LR__RL_WRWaist, 'R90 LR RL-WRWaist'],
  [FigureHold.L90__LR_WLShoulder__RL, 'L90 LR-WLShoulder RL'],
  [FigureHold.RLHipToHip__LL__RR_WRShoulder, 'RLHipToHip LL RR-WRShoulder']
]);
