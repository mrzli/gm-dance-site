import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_OTHER: FigureByTypeSectionGroupData = {
  title: 'Other',
  sections: [
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
      title: 'Woman in front, back turned',
      variations: [
        {
          description:
            'W CCW, LR over WHead, RL waist height, on 5-6. We stop the woman with MRHand on WRHip on 6. We release both hands on 7, take LL and put MRHand on WRFrontRibs on 8.',
          startHold: FigureHold.Open,
          endHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180
          ],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            '- As above, except on 7 we move LR over WHead, and on 8 we release MLHand and slide it down WLShoulder and WLHand and take LL.',
          startHold: FigureHold.Open,
          endHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180
          ],
          videos: [FigureVideo.V_001_03]
        },
        {
          description: 'Basic with woman in front, back turned.',
          startHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          labels: [],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            'W Hip CW, led by our hips, starting with MLeft then MForward.',
          startHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            'Exit from woman in front, back turned. Before the start of the figure LL is straitened to MLeft. We push straitened LL to MRight on 5-6. On 7 we raise LL and step forward. On 8 we step in from of the woman and turn, taking her in closed hold.',
          startHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          endHold: FigureHold.Closed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_001_03]
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
  ]
};
