export enum FigureHold {
  Open = 'Open',
  Closed = 'Closed',
  SemiClosed = 'SemiClosed',
  LRPalmOnPalm = 'LRPalmOnPalm',
  LRAndRLClose = 'LRAndRLClose',
  LR__R_WRShoulder = 'LR__R_WRShoulder',
  LR__RL_WRWaistBehindBack = 'LR__RL_WRWaistBehindBack',
  RL__LR_WLWaistBehindBack = 'RL__LR_WLWaistBehindBack',
  LLOverRR = 'LLOverRR',
  RR = 'RR',
  L_WRWaist__R_WLWaist = 'L_WRWaist__R_WLWaist',
  R90__LR__RL_WRWaist = 'R90__LR__RL_WRWaist',
  L90__LR_WLShoulder__RL = 'L90__LR_WLShoulder__RL',
  RLHipToHip__LL__RR_WRShoulder = 'RLHipToHip__LL__RR_WRShoulder',
  WWIthBack__LL__R_WRFrontRibs = 'WWIthBack__LL__R_WRFrontRibs'
}

export const MAP_FIGURE_HOLD_TO_TEXT = new Map<FigureHold, string>([
  [FigureHold.Open, 'Open'],
  [FigureHold.Closed, 'Closed'],
  [FigureHold.SemiClosed, 'SemiClosed'],
  [FigureHold.LRPalmOnPalm, 'LR-PalmOnPalm'],
  [FigureHold.LRAndRLClose, 'LR+RL-Close'],
  [FigureHold.LR__R_WRShoulder, 'LR R-WRShoulder'],
  [FigureHold.LR__RL_WRWaistBehindBack, 'LR RL-WRWaistBehindBack'],
  [FigureHold.RL__LR_WLWaistBehindBack, 'RL LR-WLWaistBehindBack'],
  [FigureHold.LLOverRR, 'LL>RR'],
  [FigureHold.RR, 'RR'],
  [FigureHold.L_WRWaist__R_WLWaist, 'L-WRWaist R-WLWaist'],
  [FigureHold.R90__LR__RL_WRWaist, 'R90 LR RL-WRWaist'],
  [FigureHold.L90__LR_WLShoulder__RL, 'L90 LR-WLShoulder RL'],
  [FigureHold.RLHipToHip__LL__RR_WRShoulder, 'RLHipToHip LL RR-WRShoulder'],
  [FigureHold.WWIthBack__LL__R_WRFrontRibs, 'WWIthBack LL R-WRFrontRibs']
]);
