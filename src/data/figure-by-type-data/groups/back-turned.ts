import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_BACK_TURNED: FigureByTypeSectionGroupData = {
  title: 'Back turned',
  sections: [
    {
      title: 'Woman in front, back turned',
      variations: [
        {
          description:
            'Entering into woman in front, back turned. Throwing WRHand to WB with MLHand in 2 beats. In 2 beats leading W CCW with MLHand on WRUpperHand. Taking LL at the end.',
          startHold: FigureHold.Closed,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [
            FigureLabel.PeriodOneToFour,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180
          ],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            'Entering into woman in front, back turned. W CCW, LR over WHead, RL waist height, on 5-6. We stop the woman with MRHand on WRHip on 6. We release both hands on 7, take LL and put MRHand on WRFrontRibs on 8.',
          startHold: FigureHold.Open,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
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
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
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
            'Exit from woman in front, back turned. Before the start of the figure LL is straitened to MLeft. We push straitened LL to MRight on 5-6. On 7 we raise LL and step forward. On 8 we step in from of the woman and turn, taking her in closed hold.',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.Closed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            'Exit from woman in front, back turned. W CW LL over WHead, DD nothing. At the end, we release LL into DL',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.Open,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees540
          ],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            '- As above, but at the end also LL over MHead, and then we release LL.',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.SemiClosed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees540
          ],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description: 'Basic with woman in front, back turned.',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_03]
        },
        {
          description: 'Slow with woman in front, back turned.',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            'W Hip CW, led by our hips, starting with MLeft then MForward.',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_03]
        },
        {
          description: 'Sensual, normal front wave.',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description: 'Sensual, front wave with sit.',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description: 'Sensual, intermittent front wave.',
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04]
        }
      ]
    },
    {
      title: 'Man in front, back turned',
      variations: [
        {
          description:
            'Entering into man in front, back turned. M CW LD above MHead, DL waist height. In step-tap-step-tap sequence.',
          startHold: FigureHold.Open,
          endHold: FigureHold.MWithBack__LROverRL,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            'Setting up proper man in front, back turned. During all 4 beats I am pulling woman on to my back. On beat 1 move LR over the front of RL, so that MLHand is under MRElbow and put LR on MRStomach and RL on MLChest. On beat 2 I release LR and RL, and take LL at MLChest and RR and MRStomach. On beats 3-4 I lift LL and RR or myself and put them, respectively, on MLStomach and MRChest.',
          startHold: FigureHold.MWithBack__LROverRL,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            'Exit from man in front, back turned. As preparation we actually move slightly away from woman, and lift the hands from our body, as compared to normal man-in-front position. We release LL at the beginning. Simultaneous W CW and M CW LL over WHead, RR nothing. At the end we take LL above RR. Men step in step-tap-step-tap sequence.',
          startHold: FigureHold.MWithBack__LL__RR,
          endHold: FigureHold.LLOverRR,
          labels: [
            FigureLabel.PeriodOneToFour,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees360,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description: 'Sensual, normal front wave.',
          startHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description: 'Sensual, front wave with sit.',
          startHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description: 'Sensual, intermittent front wave.',
          startHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04]
        }
      ]
    }
  ]
};
