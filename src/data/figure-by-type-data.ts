import { FigureByTypeSectionData } from '../types/domain/figure-by-type/figure-by-type-section-data';
import { FigureHold } from '../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_DATA: readonly FigureByTypeSectionData[] = [
  {
    title: 'Basic steps',
    variations: [
      {
        description: 'Basic.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'Forward-backward.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: '- As above, but in semi-closed hold.',
        startHold: FigureHold.SemiClosed,
        endHold: FigureHold.SemiClosed,
        labels: [],
        videos: [FigureVideo.V_001_02]
      },
      {
        description: 'Slow.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [],
        videos: [FigureVideo.V_001_Pokreti]
      }
    ]
  },
  {
    title: 'Simple position changes',
    variations: [
      {
        description: 'Pull woman to yourself / move into a closed hold.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Closed,
        labels: [],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'Push woman from yourself / push yourself from woman.',
        startHold: FigureHold.Closed,
        endHold: FigureHold.Open,
        labels: [],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'WLHand throw back',
        startHold: FigureHold.Open,
        endHold: FigureHold.SemiClosed,
        labels: [],
        videos: [FigureVideo.V_001_Pokreti, FigureVideo.V_001_02]
      },
      {
        description: 'WRHand throw back',
        startHold: FigureHold.SemiClosed,
        endHold: FigureHold.Closed,
        labels: [],
        videos: [FigureVideo.V_001_Pokreti]
      }
    ]
  },
  {
    title: 'Simple turns (woman)',
    variations: [
      {
        description: 'W CW RL above WHead, LR nothing.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodOneToFour,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCw,
          FigureLabel.TurnWomanDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'W CW LR above WHead, RL nothing.',
        startHold: FigureHold.LRPalmOnPalm,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodOneToFour,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCw,
          FigureLabel.TurnWomanDegrees360
        ],
        videos: [FigureVideo.V_001_02]
      },
      {
        description: 'W CCW LR above WHead, RL nothing.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti, FigureVideo.V_001_01]
      },
      {
        description: '- As above, but starting from semi-closed position.',
        startHold: FigureHold.SemiClosed,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description:
          'W CCW LR above WHead, RL nothing, while we turn we put MRHand on WBack.',
        startHold: FigureHold.Open,
        endHold: FigureHold.SemiClosed,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti, FigureVideo.V_001_02]
      },
      {
        description: '- As above, but starting from semi-closed position.',
        startHold: FigureHold.SemiClosed,
        endHold: FigureHold.SemiClosed,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      }
    ]
  },
  {
    title: 'Simple turns (man)',
    variations: [
      {
        description: 'M CCW RL above MHead, LR nothing.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodOneToFour,
          FigureLabel.TurnManTurn,
          FigureLabel.TurnManCcw,
          FigureLabel.TurnManDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'M CW LR above MHead, RL nothing.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnManTurn,
          FigureLabel.TurnManCw,
          FigureLabel.TurnManDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description:
          'M CCW MRHand above LR, we let LR go when it gets in the way.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodOneToFour,
          FigureLabel.TurnManTurn,
          FigureLabel.TurnManCcw,
          FigureLabel.TurnManDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: '- As above but we tank Right in Right at the end.',
        startHold: FigureHold.Open,
        endHold: FigureHold.RR,
        labels: [
          FigureLabel.PeriodOneToFour,
          FigureLabel.TurnManTurn,
          FigureLabel.TurnManCcw,
          FigureLabel.TurnManDegrees360
        ],
        videos: [FigureVideo.V_001_01]
      },
      {
        description:
          'M CW MLHand above RL, we let RL go when it gets in the way.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnManTurn,
          FigureLabel.TurnManCw,
          FigureLabel.TurnManDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      }
    ]
  },
  {
    title: 'Simple turns (simultaneous/together)',
    variations: [
      {
        description:
          'Simultaneous M CCW and W CW led RL which we release horizontally while we turn, LR nothing.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodOneToFour,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees360,
          FigureLabel.TurnManTurn,
          FigureLabel.TurnManCcw,
          FigureLabel.TurnManDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description:
          'Simultaneous M CW and W CCW led LR which we release horizontally while we turn, RL nothing.',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees360,
          FigureLabel.TurnManTurn,
          FigureLabel.TurnManCw,
          FigureLabel.TurnManDegrees360
        ],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'M/W CW together.',
        startHold: FigureHold.SemiClosed,
        endHold: FigureHold.SemiClosed,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCw,
          FigureLabel.TurnWomanDegrees180,
          FigureLabel.TurnManTurn,
          FigureLabel.TurnManCw,
          FigureLabel.TurnManDegrees180
        ],
        videos: [FigureVideo.V_001_Pokreti]
      }
    ]
  },
  {
    title: 'Turns two hands over head (woman)',
    variations: [
      {
        description:
          'W CCW both above WHead, changing hands to normal hold at the end.',
        startHold: FigureHold.LLOverRR,
        endHold: FigureHold.LRAndRLClose,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees360
        ],
        videos: [FigureVideo.V_001_01]
      }
    ]
  },
  {
    title: "Raising/throwing woman's hands directly above",
    variations: [
      {
        description:
          "Throwing woman's hands down and to the outside, and putting my hands on her waist.",
        startHold: FigureHold.LRAndRLClose,
        endHold: FigureHold.L_WRWaist__R_WLWaist,
        labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
        videos: [FigureVideo.V_001_01]
      }
    ]
  },
  {
    title: 'Hip/waist leading',
    variations: [
      {
        description:
          'W CCW led from hips, then putting MRHand on WBack while turning.',
        startHold: FigureHold.L_WRWaist__R_WLWaist,
        endHold: FigureHold.Closed,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees360
        ],
        videos: [FigureVideo.V_001_01]
      }
    ]
  },
  {
    title: 'R90/L90 or RLHipToHip/LRHipToHip',
    variations: [
      {
        description: 'W CCW, LR above WHead, RL waist height.',
        startHold: FigureHold.Open,
        endHold: FigureHold.R90__LR__RL_WRWaist,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees270
        ],
        videos: [FigureVideo.V_001_02]
      },
      {
        description: 'W CW, LR shoulder height, RL waist height.',
        startHold: FigureHold.R90__LR__RL_WRWaist,
        endHold: FigureHold.L90__LR_WLShoulder__RL,
        labels: [
          FigureLabel.PeriodOneToFour,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCw,
          FigureLabel.TurnWomanDegrees180
        ],
        videos: [FigureVideo.V_001_02]
      },
      {
        description: 'W CCW, LR shoulder height, RL nothing.',
        startHold: FigureHold.L90__LR_WLShoulder__RL,
        endHold: FigureHold.LRPalmOnPalm,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees270
        ],
        videos: [FigureVideo.V_001_02]
      },
      {
        description:
          'W CCW led by RR up to a WShoulder, small M CCW to align MRHip to WLHip.',
        startHold: FigureHold.RR,
        endHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
        labels: [
          FigureLabel.PeriodFiveToEight,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCcw,
          FigureLabel.TurnWomanDegrees270,
          FigureLabel.TurnManCcw,
          FigureLabel.TurnManDegrees90
        ],
        videos: [FigureVideo.V_001_01]
      },
      {
        description: 'W CW, and small M CW to face the woman.',
        startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
        endHold: FigureHold.LLOverRR,
        labels: [
          FigureLabel.PeriodOneToFour,
          FigureLabel.TurnWomanTurn,
          FigureLabel.TurnWomanCw,
          FigureLabel.TurnWomanDegrees270,
          FigureLabel.TurnManCw,
          FigureLabel.TurnManDegrees90
        ],
        videos: [FigureVideo.V_001_01]
      }
    ]
  },
  {
    title: 'Stylistic',
    variations: [
      {
        description: 'Small movement with feet going push-tap-step-tap.',
        startHold: FigureHold.Closed,
        endHold: FigureHold.Closed,
        labels: [FigureLabel.PeriodOneToFour],
        videos: [FigureVideo.V_001_01]
      },
      {
        description: '- As above, but in opposite direction.',
        startHold: FigureHold.Closed,
        endHold: FigureHold.Closed,
        labels: [FigureLabel.PeriodFiveToEight],
        videos: [FigureVideo.V_001_01]
      },
      {
        description: 'Stylized CW windmill in contact with WRWrist.',
        startHold: FigureHold.SemiClosed,
        endHold: FigureHold.SemiClosed,
        labels: [FigureLabel.MovementMoving, FigureLabel.PeriodFiveToEight],
        videos: [FigureVideo.V_001_02]
      },
      {
        description:
          'Stylistic swaying left-right. Can be 4 beats or 8 beats (simply repeated twice).',
        startHold: FigureHold.SemiClosed,
        endHold: FigureHold.SemiClosed,
        labels: [FigureLabel.PeriodOneToEight],
        videos: [FigureVideo.V_001_02]
      }
    ]
  },

  {
    title: '********** UNSORTED **********',
    variations: [
      {
        description: 'Hip to hip walk.',
        startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
        endHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
        labels: [FigureLabel.PeriodOneToEight],
        videos: [FigureVideo.V_001_01]
      }
    ]
  }
];
