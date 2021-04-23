export enum FigureHold {
  Open = 'Open',
  OpenPalmOnPalm = 'OpenPalmOnPalm',
  Closed = 'Closed',
  SemiClosed = 'SemiClosed',
  LRPalmOnPalm = 'LRPalmOnPalm',
  LRAndRLClose = 'LRAndRLClose',
  LR__MRWrist_WLWrist = 'LR__MRWrist_WLWrist',
  LR__R_WRShoulder = 'LR__R_WRShoulder',
  LR__RL_WRWaistBehindBack = 'LR__RL_WRWaistBehindBack',
  RL__LR_WLWaistBehindBack = 'RL__LR_WLWaistBehindBack',
  LLOverRR = 'LLOverRR',
  RR = 'RR',
  RROverLL = 'RROverLL',
  L_WRWaist__R_WLWaist = 'L_WRWaist__R_WLWaist',
  L_WRHip__R_WLHip = 'L_WRHip__R_WLHip',
  R_WLShoulder__LL_WRWaistBehindBack = 'R_WLShoulder__LL_WRWaistBehindBack',
  R90__LR__RL_WRWaist = 'R90__LR__RL_WRWaist',
  R90__L_WLShoulder__RL_WRWaist = 'R90__L_WLShoulder__RL_WRWaist',
  R90WOnML__L_WLFrontRibs__R_WBack = 'R90WOnML__L_WLFrontRibs__R_WBack',
  L90__LR_WLShoulder__RL = 'L90__LR_WLShoulder__RL',
  RLHipToHip__LL__RR_WRShoulder = 'RLHipToHip__LL__RR_WRShoulder',
  WWithBack__LL__R_WRFrontRibs = 'WWithBack__LL__R_WRFrontRibs',
  MWithBack__LROverRL = 'MWithBack__LROverRL',
  MWithBack__LL__RR = 'MWithBack__LL__RR',
  MWithBack__LL_MLStomach__RR_MRChest = 'MWithBack__LL_MLStomach__RR_MRChest'
}

export const MAP_FIGURE_HOLD_TO_TEXT = new Map<FigureHold, string>([
  [FigureHold.Open, 'Open'],
  [FigureHold.OpenPalmOnPalm, 'OpenPalmOnPalm'],
  [FigureHold.Closed, 'Closed'],
  [FigureHold.SemiClosed, 'SemiClosed'],
  [FigureHold.LRPalmOnPalm, 'LR-PalmOnPalm'],
  [FigureHold.LRAndRLClose, 'LR+RL-Close'],
  [FigureHold.LR__MRWrist_WLWrist, 'LR MRWrist-WLWrist'],
  [FigureHold.LR__R_WRShoulder, 'LR R-WRShoulder'],
  [FigureHold.LR__RL_WRWaistBehindBack, 'LR RL-WRWaistBehindBack'],
  [FigureHold.RL__LR_WLWaistBehindBack, 'RL LR-WLWaistBehindBack'],
  [FigureHold.LLOverRR, 'LL>RR'],
  [FigureHold.RR, 'RR'],
  [FigureHold.RROverLL, 'RR>LL'],
  [FigureHold.L_WRWaist__R_WLWaist, 'L-WRWaist R-WLWaist'],
  [FigureHold.L_WRHip__R_WLHip, 'L-WRHip R-WLHip'],
  [
    FigureHold.R_WLShoulder__LL_WRWaistBehindBack,
    'R-WLShoulder LL-WRWaistBehindBack'
  ],
  [FigureHold.R90__LR__RL_WRWaist, 'R90 LR RL-WRWaist'],
  [FigureHold.R90__L_WLShoulder__RL_WRWaist, 'R90 L-WLShoulder RL-WRWaist'],
  [
    FigureHold.R90WOnML__L_WLFrontRibs__R_WBack,
    'R90WOnML L-WLFrontRibs R-WBack'
  ],
  [FigureHold.L90__LR_WLShoulder__RL, 'L90 LR-WLShoulder RL'],
  [FigureHold.RLHipToHip__LL__RR_WRShoulder, 'RLHipToHip LL RR-WRShoulder'],
  [FigureHold.WWithBack__LL__R_WRFrontRibs, 'WWithBack LL R-WRFrontRibs'],
  [FigureHold.MWithBack__LROverRL, 'MWithBack LR>RL'],
  [FigureHold.MWithBack__LL__RR, 'MWithBack LL RR'],
  [
    FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
    'MWithBack LL-MLStomach RR-MRChest'
  ]
]);
