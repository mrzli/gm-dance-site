import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const SPREAD_OUT_SIMPLE_TEXT = 'MR,ML, throw LR spread out RL';
const HIPS_SIMPLE_TEXT = 'Turn from hips; ; CCW';
const CROUCH_SIMPLE_TEXT = 'WCrouch D/U';
const HAND_DIVES_SIMPLE_TEXT = 'Hand dives enter/exit, turn sides L/R';
const HAND_CIRCLE_SIMPLE_TEXT = 'Hand circle';

export const FIGURE_BY_TYPE_OTHER: FigureByTypeSectionGroupData = {
  groupTitle: 'Other',
  sections: [
    {
      title: 'Spread out',
      variations: [
        {
          description:
            'Small moves with LR to ML, then MR, then on beat 3 throw LR to down and WBack and step back, beat 4 tap',
          simpleText: SPREAD_OUT_SIMPLE_TEXT,
          startHold: FigureHold.Open,
          endHold: FigureHold.SpreadOutRL,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_01]
        }
      ]
    },
    {
      title: 'Hip/waist leading',
      variations: [
        {
          description:
            'W CCW led from hips, then putting MRHand on WBack while turning.',
          simpleText: HIPS_SIMPLE_TEXT,
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
      title: 'Crouch',
      variations: [
        {
          description: 'Push woman down to a crouch.',
          simpleText: CROUCH_SIMPLE_TEXT,
          startHold: FigureHold.L_WLShoulder__R_WLShoulderBlade,
          endHold: FigureHold.WCrouched__L_WLShoulder__R_WLShoulderBlade,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_003_06]
        },
        {
          description: 'Pull woman up from a crouch.',
          simpleText: CROUCH_SIMPLE_TEXT,
          startHold: FigureHold.WCrouched__L_WRShoulder__R_WLShoulderBlade,
          endHold: FigureHold.L_WRShoulder__R_WLShoulderBlade,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_003_06]
        }
      ]
    },
    {
      title: 'Hand dives',
      variations: [
        {
          description:
            'Entering. Before starting we are a bit spread out. We exchange positions while keeping LR in contact. At the end we dive LR down.',
          simpleText: HAND_DIVES_SIMPLE_TEXT,
          startHold: FigureHold.Open,
          endHold: FigureHold.SpreadOutLR,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees270,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees270
          ],
          videos: [FigureVideo.V_003_04]
        },
        {
          description:
            'Exiting. We do 5-and-6-and-7-8 steps. We pull-push the woman alternately on 5-6-7, and on the last 2 beats I also turn towards the woman and get closer to her.',
          simpleText: HAND_DIVES_SIMPLE_TEXT,
          startHold: FigureHold.SpreadOutRL,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_003_04]
        },
        {
          description:
            'On first 2 beats we do LR CCW windmill. At the end of 2 beats we let LR go. In next 2 beats we take RL and continue the flow with a RL dive at the end. We turn simultaneously to go with the flow of hands.',
          simpleText: HAND_DIVES_SIMPLE_TEXT,
          startHold: FigureHold.SpreadOutLR,
          endHold: FigureHold.SpreadOutRL,
          labels: [
            FigureLabel.PeriodOneToFour,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees180,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCcw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_003_04]
        },
        {
          description: '- As above, but in the opposite direction.',
          simpleText: HAND_DIVES_SIMPLE_TEXT,
          startHold: FigureHold.SpreadOutLR,
          endHold: FigureHold.SpreadOutRL,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_003_04]
        }
      ]
    },
    {
      title: 'Hand circle',
      variations: [
        {
          description:
            'Entrance into hand circle. W CCW LR above WHead, RL nothing. We also turn to woman, and at the end we raise LR straight above.',
          simpleText: HAND_CIRCLE_SIMPLE_TEXT,
          startHold: FigureHold.Open,
          endHold: FigureHold.LR_StraightUp__R_WLShoulderBlade,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees270,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees90
          ],
          videos: [FigureVideo.V_003_04]
        },
        {
          description:
            'The steps are forward-step-back-step. At start we push LR straight MF into a vertical circle, and at the end we do a small CCW 90 degrees together to finish the move. At the end MLHand grabs WRWrist and WRHand is straight to ML.',
          simpleText: HAND_CIRCLE_SIMPLE_TEXT,
          startHold: FigureHold.LR_StraightUp__R_WLShoulderBlade,
          endHold: FigureHold.L_WRWrist__R_WLShoulderBlade,
          labels: [
            FigureLabel.PeriodOneToFour,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees90,
            FigureLabel.TurnManCcw,
            FigureLabel.TurnManDegrees90
          ],
          videos: [FigureVideo.V_003_04]
        },
        {
          description:
            'In 2 beats we push the woman using WRHand slightly to MR, and put WRHand on MLChest and let LR go. In next 2 beats we do a wave-like movement toward and in front of the woman.',
          simpleText: HAND_CIRCLE_SIMPLE_TEXT,
          startHold: FigureHold.L_WRWrist__R_WLShoulderBlade,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_003_04]
        }
      ]
    },

    {
      title: '********** UNSORTED **********',
      variations: []
    }
  ]
};
