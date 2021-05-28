import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const W_HAND_BEHIND_BACK_UNWIND_SIMPLE_TEXT =
  'W unwind; CW (LRBehind)->(O); CCW (LLBehind R-WLShoulder/LLBehind R-WLHip)->(SC)';
const PALM_ON_SIDE_SIMPLE_TEXT =
  'Palm on side - basic *** Cross legs and grab MRWrist then slide back up the arm';
const M_HAND_BEHIND_NECK = 'M hand behind neck - basic';

export const FIGURE_BY_TYPE_GROUP_TWISTED: FigureByTypeSectionGroupData = {
  groupTitle: 'Twisted positions',
  sections: [
    {
      title: 'Hand behind neck (man)',
      variations: [
        {
          description: 'Basic.',
          simpleText: M_HAND_BEHIND_NECK,
          startHold: FigureHold.RL_Nothing__LR_MLShoulderBehindNeck,
          endHold: FigureHold.RL_Nothing__LR_MLShoulderBehindNeck,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_02]
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
          startHold: FigureHold.LL_WRWaistBehindBack__R_WLShoulder,
          endHold: FigureHold.SemiClosed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_002_02]
        },
        {
          description: '- As above, but MRHand is on WLHip.',
          simpleText: W_HAND_BEHIND_BACK_UNWIND_SIMPLE_TEXT,
          startHold: FigureHold.LL_WRWaistBehindBack__R_WLHip,
          endHold: FigureHold.SemiClosed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
          videos: [FigureVideo.V_003_01]
        },
        {
          description: 'Basic.',
          simpleText: PALM_ON_SIDE_SIMPLE_TEXT,
          startHold: FigureHold.LR__R_WRSideOuterPalm,
          endHold: FigureHold.LR__R_WRSideOuterPalm,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_03]
        },
        {
          description:
            'Push W to MR in 2 beats, also MRLeg over MLLeg and MRHand on MRWrist. Next 2 beats slide MRHand to MRShoulder.',
          simpleText: PALM_ON_SIDE_SIMPLE_TEXT,
          startHold: FigureHold.LR__R_WRSideOuterPalm,
          endHold: FigureHold.LR__R_WRShoulder,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_003_03]
        }
      ]
    },
    {
      title: 'Hand behind back (man)',
      variations: [
        {
          description: 'Separation, MRHand slides down to WRHand.',
          simpleText: 'Separate RR slide down hand',
          startHold: FigureHold.LR_MRWaistBehindBack__R_WRShoulder,
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
          simpleText: 'Wedge, LRLLRL-Windmill',
          startHold: FigureHold.RL__LR_WLAroundElbow,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_04]
        }
      ]
    }
  ]
};
