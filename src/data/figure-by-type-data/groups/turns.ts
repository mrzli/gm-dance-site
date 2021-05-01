import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const W_SIMPLE_TURN_SIMPLE_TEXT =
  'W inner; CW (outer/inner hand); CCW (O/SC)->(O/SC)';
const M_SIMPLE_TURN_SIMPLE_TEXT = 'M inner turn, outer hand; CCW; CW';
const M_SIMPLE_TURN_OVER_HAND_SIMPLE_TEXT =
  'M inner, MOuterHand above inner pair; CCW ->(O/RR); CW ->(O/RR>LL/MRWrist on WLWrist)';
const SIMULTANEOUS_TURNS_SIMPLE_TEXT = 'Simultaneous * Together; CCW (SC/C)';
const W_BOTH_TURNS_SIMPLE_TEXT =
  'W inner both; ; CCW inner above (O)->(wedge/throw), outer above (LL>RR)->(O)';
const W_ONE_ONE_TURNS_SIMPLE_TEXT =
  'W inner one-one; CW outer above (RR>LL)->(R-WLShoulder_LLBehind); CCW inner above (O)->(LRBehind)';
const M_ONE_ONE_TURNS_SIMPLE_TEXT =
  'M inner one-one; ; CW inner above (O)->(R-WRShoulder_LRBehind)';
const W_HAND_BEHIND_BACK_UNWIND_SIMPLE_TEXT =
  'W unwind; CW (LRBehind)->(O); CCW (LLBehind)->(SC)';

export const FIGURE_BY_TYPE_GROUP_TURNS: FigureByTypeSectionGroupData = {
  groupTitle: 'Turns / turn related position',
  sections: [
    {
      title: 'Simple turns (woman)',
      variations: [
        {
          description: 'W CW RL above WHead, LR nothing.',
          simpleText: W_SIMPLE_TURN_SIMPLE_TEXT,
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
          description: 'W CCW LR above WHead, RL nothing.',
          simpleText: W_SIMPLE_TURN_SIMPLE_TEXT,
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
          simpleText: W_SIMPLE_TURN_SIMPLE_TEXT,
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
            '- As above (first one), but while we turn we put MRHand on WBack.',
          simpleText: W_SIMPLE_TURN_SIMPLE_TEXT,
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
          simpleText: W_SIMPLE_TURN_SIMPLE_TEXT,
          startHold: FigureHold.SemiClosed,
          endHold: FigureHold.SemiClosed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_001_Pokreti]
        },
        {
          description: 'W CW LR above WHead, RL nothing.',
          simpleText: W_SIMPLE_TURN_SIMPLE_TEXT,
          startHold: FigureHold.LRPalmOnPalm,
          endHold: FigureHold.Open,
          labels: [
            FigureLabel.PeriodOneToFour,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_001_02]
        }
      ]
    },
    {
      title: 'Simple turns (man)',
      variations: [
        {
          description: 'M CCW RL above MHead, LR nothing.',
          simpleText: M_SIMPLE_TURN_SIMPLE_TEXT,
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
          simpleText: M_SIMPLE_TURN_SIMPLE_TEXT,
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
          simpleText: M_SIMPLE_TURN_OVER_HAND_SIMPLE_TEXT,
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
          description: '- As above but we take RR at the end.',
          simpleText: M_SIMPLE_TURN_OVER_HAND_SIMPLE_TEXT,
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
          simpleText: M_SIMPLE_TURN_OVER_HAND_SIMPLE_TEXT,
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
          simpleText: M_SIMPLE_TURN_OVER_HAND_SIMPLE_TEXT,
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
          simpleText: M_SIMPLE_TURN_OVER_HAND_SIMPLE_TEXT,
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
          simpleText: SIMULTANEOUS_TURNS_SIMPLE_TEXT,
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
          simpleText: SIMULTANEOUS_TURNS_SIMPLE_TEXT,
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
          simpleText: SIMULTANEOUS_TURNS_SIMPLE_TEXT,
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
          simpleText: SIMULTANEOUS_TURNS_SIMPLE_TEXT,
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
          simpleText: W_BOTH_TURNS_SIMPLE_TEXT,
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
          simpleText: W_BOTH_TURNS_SIMPLE_TEXT,
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
          simpleText: W_BOTH_TURNS_SIMPLE_TEXT,
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
          description: 'W CCW RL above WHead, LR waist height.',
          simpleText: W_ONE_ONE_TURNS_SIMPLE_TEXT,
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
          simpleText: W_ONE_ONE_TURNS_SIMPLE_TEXT,
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
          simpleText: M_ONE_ONE_TURNS_SIMPLE_TEXT,
          startHold: FigureHold.Open,
          endHold: FigureHold.R_WRShoulder__LR_MRWaistBehindBack,
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
          description: 'W CW RL above WHead, LR waist height.',
          simpleText: W_HAND_BEHIND_BACK_UNWIND_SIMPLE_TEXT,
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
            'W CCW LL in contact, RR nothing. At the end LL over MHead.',
          simpleText: W_HAND_BEHIND_BACK_UNWIND_SIMPLE_TEXT,
          startHold: FigureHold.R_WLShoulder__LL_WRWaistBehindBack,
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
          simpleText: 'Separate RR slide down',
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
          simpleText: 'Wedge; LRLLRL-Windmill;',
          startHold: FigureHold.RL__LR_WLAroundElbow,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_04]
        }
      ]
    }
  ]
};
