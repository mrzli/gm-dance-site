import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_GROUP_TURNS: FigureByTypeSectionGroupData = {
  title: 'Turns / hand behind back',
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
        },
        {
          description:
            'W CCW both above WHead. When woman is turned to us again (on about 7), release RL and launch WLHand with LR pushing downwards. At the end again take RL.',
          startHold: FigureHold.Open,
          endHold: FigureHold.Open,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_001_03]
        }
      ]
    },
    {
      title: 'Hand behind back (woman)',
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
        }
      ]
    }
  ]
};
