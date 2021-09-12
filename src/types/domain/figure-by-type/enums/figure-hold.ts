export enum FigureHold {
  Unknown = 'Unknown',
  Open = 'Open',
  OpenPalmOnPalm = 'OpenPalmOnPalm',
  Closed = 'Closed',
  ClosedWithSit = 'ClosedWithSit',
  ClosedMRKneeBetween = 'ClosedMRKneeBetween',
  SemiClosed = 'SemiClosed',
  SpreadOutLR = 'SpreadOutLR',
  SpreadOutRL = 'SpreadOutRL',
  LRPalmOnPalm = 'LRPalmOnPalm',
  LRAndRLClose = 'LRAndRLClose',
  LR__MRWrist_WLWrist = 'LR__MRWrist_WLWrist',
  LR__R_WLShoulder = 'LR__R_WLShoulder',
  LR__R_WRShoulder = 'LR__R_WRShoulder',
  LR__R_WRSideOuterPalm = 'LR__R_WRSideOuterPalm',
  LR__RL_WRWaistBehindBack = 'LR__RL_WRWaistBehindBack',
  LR_StraightUp__R_WLShoulderBlade = 'LR_StraightUp__R_WLShoulderBlade',
  RL__LR_WLWaistBehindBack = 'RL__LR_WLWaistBehindBack',
  RL__LR_WLAroundElbow = 'RL__LR_WLAroundElbow',
  RL_Nothing__LR_MLShoulderBehindNeck = 'RL_Nothing__LR_MLShoulderBehindNeck',
  LLOverRR = 'LLOverRR',
  RR = 'RR',
  RROverLL = 'RROverLL',
  L_WRWaist__R_WLWaist = 'L_WRWaist__R_WLWaist',
  L_WRHip__R_WLHip = 'L_WRHip__R_WLHip',
  L_WRShoulder__R_WLWaist = 'L_WRShoulder__R_WLWaist',
  L_WRWrist__R_WLShoulderBlade = 'L_WRWrist__R_WLShoulderBlade',
  L_WRWristStraightUp__R_WLWristStraightUp = 'L_WRWristStraightUp__R_WLWristStraightUp',
  L_WRShoulder__R_WLShoulderBlade = 'L_WRShoulder__R_WLShoulderBlade',
  L_WLShoulder__R_WLShoulderBlade = 'L_WLShoulder__R_WLShoulderBlade',
  LR_MRWaistBehindBack__R_WRShoulder = 'LR_MRWaistBehindBack__R_WRShoulder',
  LL_WRWaistBehindBack__R_WLShoulder = 'LL_WRWaistBehindBack__R_WLShoulder',
  LL_WRWaistBehindBack__R_WLHip = 'LL_WRWaistBehindBack__R_WLHip',
  R90__LR__RL_WRWaist = 'R90__LR__RL_WRWaist',
  R90__L_WLShoulder__RL_WRWaist = 'R90__L_WLShoulder__RL_WRWaist',
  R90__L_WLWrist__RL_WRWaist = 'R90__L_WLWrist__RL_WRWaist',
  R90__LL__RR_WRShoulder = 'R90__LL__RR_WRShoulder',
  R90WOnML__L_WLFrontRibs__R_WBack = 'R90WOnML__L_WLFrontRibs__R_WBack',
  L90__LR_WLShoulder__RL = 'L90__LR_WLShoulder__RL',
  L90__LR_StraightUp__R_WLWaist = 'L90__LR_StraightUp__R_WLWaist',
  L90__L_WBack__R_WLWaist = 'L90__L_WBack__R_WLWaist',
  RLHipToHip__LL__RR_WRShoulder = 'RLHipToHip__LL__RR_WRShoulder',
  RLHipToHip__WL_MBack_Over_R_WBack = 'RLHipToHip__WL_MBack_Over_R_WBack',
  RLHipToHip__RL = 'RLHipToHip__RL',
  LRHipToHip__LR = 'LRHipToHip__LR',
  WWithBack__LL__R_WRFrontRibs = 'WWithBack__LL__R_WRFrontRibs',
  MWithBack__LROverRL = 'MWithBack__LROverRL',
  MWithBack__LL__RR = 'MWithBack__LL__RR',
  MWithBack__LL_MLStomach__RR_MRChest = 'MWithBack__LL_MLStomach__RR_MRChest',
  WCrouched__L_WRShoulder__R_WLShoulderBlade = 'WCrouched__L_WRShoulder__R_WLShoulderBlade',
  WCrouched__L_WLShoulder__R_WLShoulderBlade = 'WCrouched__L_WLShoulder__R_WLShoulderBlade'
}

export const MAP_FIGURE_HOLD_TO_TEXT = new Map<FigureHold, string>([
  [FigureHold.Unknown, 'Unknown'],
  [FigureHold.Open, 'Open'],
  [FigureHold.OpenPalmOnPalm, 'Open PalmOnPalm'],
  [FigureHold.Closed, 'Closed'],
  [FigureHold.ClosedWithSit, 'ClosedWithSit'],
  [FigureHold.ClosedMRKneeBetween, 'Closed MRKneeBetween'],
  [FigureHold.SemiClosed, 'SemiClosed'],
  [FigureHold.SpreadOutLR, 'SpreadOut LR'],
  [FigureHold.SpreadOutRL, 'SpreadOut RL'],
  [FigureHold.LRPalmOnPalm, 'LR-PalmOnPalm'],
  [FigureHold.LRAndRLClose, 'LR+RL-Close'],
  [FigureHold.LR__MRWrist_WLWrist, 'LR MRWrist-WLWrist'],
  [FigureHold.LR__R_WLShoulder, 'LR R-WLShoulder'],
  [FigureHold.LR__R_WRShoulder, 'LR R-WRShoulder'],
  [FigureHold.LR__R_WRSideOuterPalm, 'LR R-WRSideOuterPalm'],
  [FigureHold.LR__RL_WRWaistBehindBack, 'LR RL-WRWaistBehindBack'],
  [
    FigureHold.LR_StraightUp__R_WLShoulderBlade,
    'LR-StraightUp R-WLShoulderBlade'
  ],
  [FigureHold.RL__LR_WLWaistBehindBack, 'RL LR-WLWaistBehindBack'],
  [FigureHold.RL__LR_WLAroundElbow, 'RL LR-WLAroundElbow'],
  [
    FigureHold.RL_Nothing__LR_MLShoulderBehindNeck,
    'RL-Nothing LR-MLShoulderBehindNeck'
  ],
  [FigureHold.LLOverRR, 'LL>RR'],
  [FigureHold.RR, 'RR'],
  [FigureHold.RROverLL, 'RR>LL'],
  [FigureHold.L_WRWaist__R_WLWaist, 'L-WRWaist R-WLWaist'],
  [FigureHold.L_WRHip__R_WLHip, 'L-WRHip R-WLHip'],
  [FigureHold.L_WRShoulder__R_WLWaist, 'L-WRShoulder R-WLWaist'],
  [FigureHold.L_WRWrist__R_WLShoulderBlade, 'L-WRWrist R-WLShoulderBlade'],
  [
    FigureHold.L_WRWristStraightUp__R_WLWristStraightUp,
    'L-WRWristStraightUp R-WLWristStraightUp'
  ],
  [
    FigureHold.L_WRShoulder__R_WLShoulderBlade,
    'L-WRShoulder R-WLShoulderBlade'
  ],
  [
    FigureHold.L_WLShoulder__R_WLShoulderBlade,
    'L-WLShoulder R-WLShoulderBlade'
  ],
  [
    FigureHold.LR_MRWaistBehindBack__R_WRShoulder,
    'LR-MRWaistBehindBack R-WRShoulder'
  ],
  [
    FigureHold.LL_WRWaistBehindBack__R_WLShoulder,
    'LL-WRWaistBehindBack R-WLShoulder'
  ],
  [FigureHold.LL_WRWaistBehindBack__R_WLHip, 'LL-WRWaistBehindBack R-WLHip'],
  [FigureHold.R90__LR__RL_WRWaist, 'R90 LR RL-WRWaist'],
  [FigureHold.R90__L_WLShoulder__RL_WRWaist, 'R90 L-WLShoulder RL-WRWaist'],
  [FigureHold.R90__L_WLWrist__RL_WRWaist, 'R90 L-WLWrist RL-WRWaist'],
  [FigureHold.R90__LL__RR_WRShoulder, 'R90 LL RR-WRShoulder'],
  [
    FigureHold.R90WOnML__L_WLFrontRibs__R_WBack,
    'R90WOnML L-WLFrontRibs R-WBack'
  ],
  [FigureHold.L90__LR_WLShoulder__RL, 'L90 LR-WLShoulder RL'],
  [FigureHold.L90__LR_StraightUp__R_WLWaist, 'L90 LR-StraightUp R-WLWaist'],
  [FigureHold.L90__L_WBack__R_WLWaist, 'L90 L-WBack R-WLWaist'],
  [FigureHold.RLHipToHip__LL__RR_WRShoulder, 'RLHipToHip LL RR-WRShoulder'],
  [FigureHold.RLHipToHip__WL_MBack_Over_R_WBack, 'RLHipToHip WL-MBack>R-WBack'],
  [FigureHold.RLHipToHip__RL, 'RLHipToHip RL'],
  [FigureHold.LRHipToHip__LR, 'LRHipToHip LR'],
  [FigureHold.WWithBack__LL__R_WRFrontRibs, 'WWithBack LL R-WRFrontRibs'],
  [FigureHold.MWithBack__LROverRL, 'MWithBack LR>RL'],
  [FigureHold.MWithBack__LL__RR, 'MWithBack LL RR'],
  [
    FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
    'MWithBack LL-MLStomach RR-MRChest'
  ],
  [
    FigureHold.WCrouched__L_WRShoulder__R_WLShoulderBlade,
    'WCrouched L-WRShoulder R-WLShoulderBlade'
  ],
  [
    FigureHold.WCrouched__L_WLShoulder__R_WLShoulderBlade,
    'WCrouched L-WLShoulder R-WLShoulderBlade'
  ]
]);
