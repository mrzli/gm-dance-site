import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_GROUP_TURNS: FigureByTypeSectionGroupData = {
  title: 'Turns / turn related position',
  sections: [
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
        },
        {
          description: '- As above, but at the end taking RR above LL.',
          startHold: FigureHold.Open,
          endHold: FigureHold.RROverLL,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees360
          ],
          videos: [FigureVideo.V_002_02]
        },
        {
          description: '- As above, but putting MRWrist on WLWrist at the end.',
          startHold: FigureHold.Open,
          endHold: FigureHold.LR__MRWrist_WLWrist,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees360
          ],
          videos: [FigureVideo.V_002_01]
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
        },
        {
          description: '- As above, but closed position.',
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees180,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_002_03]
        }
      ]
    },
    {
      title: 'Turns two hands over head (woman)',
      variations: [
        {
          description:
            'W CCW both above WHead. WLElbow ends up being wedged between LR.',
          startHold: FigureHold.Open,
          endHold: FigureHold.RL__LR_WLAroundElbow,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_002_04]
        },
        {
          description:
            '- As above, for the first 2 beats. When woman is turned to us again (on about beat 3), release RL and launch WLHand with LR pushing downwards. At the end again take RL.',
          startHold: FigureHold.Open,
          endHold: FigureHold.Open,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_001_03]
        },
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
          videos: [FigureVideo.V_001_01, FigureVideo.V_002_Pokreti_04]
        }
      ]
    },
    {
      title: 'Turns one hand above head, other waist height (woman)',
      variations: [
        {
          description: 'W CCW RL above WHead, LD waist height.',
          startHold: FigureHold.Open,
          endHold: FigureHold.RL__LR_WLWaistBehindBack,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            'W CW RR over WHead, LL waist height, at the end RR over WHead again, and we let go of RR.',
          startHold: FigureHold.RROverLL,
          endHold: FigureHold.R_WLShoulder__LL_WRWaistBehindBack,
          labels: [
            FigureLabel.PeriodOneToFour,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_002_02]
        }
      ]
    },
    {
      title: 'Turns one hand above head, other waist height (man)',
      variations: [
        {
          description:
            'M CW RL above MHead, LR waist height. At the end RL over WHead, and we release RL.',
          startHold: FigureHold.Open,
          endHold: FigureHold.RL__LR_WLWaistBehindBack,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees360
          ],
          videos: [FigureVideo.V_002_04]
        }
      ]
    },
    {
      title: 'Hand behind back (woman)',
      variations: [
        {
          description: 'W CW RL above WHead, LD waist height.',
          startHold: FigureHold.RL__LR_WLWaistBehindBack,
          endHold: FigureHold.Open,
          labels: [
            FigureLabel.PeriodOneToFour,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            'W CW LL in contact, DD nothing. At the end LL over MHead.',
          startHold: FigureHold.RL__LR_WLWaistBehindBack,
          endHold: FigureHold.SemiClosed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_002_02]
        }
      ]
    },
    {
      title: 'Hand behind back (man)',
      variations: [
        {
          description: 'Separation, MRHand slides down to WRHand.',
          startHold: FigureHold.R_WRShoulder__LR_MRWaistBehindBack,
          endHold: FigureHold.RR,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_04]
        }
      ]
    },
    {
      title: 'Elbow wedge',
      variations: [
        {
          description:
            'Stylized leading of WLHand. Sequence: 1 ML, 2MR, 3-4 ML, 5 MD, 6-8 again to ML continued into CCW windmill with MLHand. We release RL when starting the windmill (around beat 6 when we are on ML).',
          startHold: FigureHold.RL__LR_WLAroundElbow,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_04]
        }
      ]
    }
  ]
};
