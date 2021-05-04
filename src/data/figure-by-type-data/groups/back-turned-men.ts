import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const MIF_ENTER_SIMPLE_TEXT = 'Step-tap-step-tap enter *** Hands on body setup';
const MIF_EXIT_SIMPLE_TEXT = 'Step-tap-step-tap exit';
const MIF_WAVES_SIMPLE_TEXT = 'Wave normal/sit/intermittent';
const MIF_HIPS_SIMPLE_TEXT = 'Hip Circle (CCW)';

export const FIGURE_BY_TYPE_BACK_TURNED_MEN: FigureByTypeSectionGroupData = {
  groupTitle: 'Man in front, back turned',
  sections: [
    {
      title: 'Entrances',
      variations: [
        {
          description:
            'Entering into man in front, back turned. M CW LR above MHead, RL waist height. In step-tap-step-tap sequence.',
          simpleText: MIF_ENTER_SIMPLE_TEXT,
          startHold: FigureHold.Open,
          endHold: FigureHold.MWithBack__LROverRL,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_003_01]
        },
        {
          description:
            'Setting up proper man in front, back turned. During all 4 beats I am pulling woman on to my back. On beat 1 move LR over the front of RL, so that MLHand is under MRElbow and put LR on MRStomach and RL on MLChest. On beat 2 I release LR and RL, and take LL at MLChest and RR and MRStomach. On beats 3-4 I lift LL and RR or myself and put them, respectively, on MLStomach and MRChest.',
          simpleText: MIF_ENTER_SIMPLE_TEXT,
          startHold: FigureHold.MWithBack__LROverRL,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_003_01]
        }
      ]
    },
    {
      title: 'Exits',
      variations: [
        {
          description:
            'Exit from man in front, back turned. As preparation we actually move slightly away from woman, and lift the hands from our body, as compared to normal man-in-front position. We release LL at the beginning. Simultaneous W CW and M CW LL over WHead, RR nothing. At the end we take LL above RR. Men step in step-tap-step-tap sequence.',
          simpleText: MIF_EXIT_SIMPLE_TEXT,
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
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_003_01]
        }
      ]
    },
    {
      title: 'Moves',
      variations: []
    },
    {
      title: 'Sensual',
      variations: [
        {
          description: 'Normal front wave.',
          simpleText: MIF_WAVES_SIMPLE_TEXT,
          startHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description: 'Front wave with sitting.',
          simpleText: MIF_WAVES_SIMPLE_TEXT,
          startHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description: 'Intermittent front wave.',
          simpleText: MIF_WAVES_SIMPLE_TEXT,
          startHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            'W Hip CCW, led by our hips, starting with MLeft then MBack.',
          simpleText: MIF_HIPS_SIMPLE_TEXT,
          startHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          endHold: FigureHold.MWithBack__LL_MLStomach__RR_MRChest,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_003_01]
        }
      ]
    }
  ]
};
