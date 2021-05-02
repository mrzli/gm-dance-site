import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const HANDS_SIMPLE_TEXT =
  'Throw ->(MHands on back/on waist) *** Raising ->(WHands on MShoulders)';
const HIPS_SIMPLE_TEXT =
  'Turn from hips; ; CCW *** Sensual circle with hips, led with hands/hips, CW/CCW *** Vertical 8 *** Half CCW + vertical 8';

export const FIGURE_BY_TYPE_OTHER: FigureByTypeSectionGroupData = {
  groupTitle: 'Other',
  sections: [
    {
      title: "Raising/throwing woman's hands directly above",
      variations: [
        {
          description:
            "Throwing woman's hands starting down and to the outside, and putting my hands on her back.",
          simpleText: HANDS_SIMPLE_TEXT,
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_02, FigureVideo.V_002_04]
        },
        {
          description: '- As above, but putting my hands on her waist.',
          simpleText: HANDS_SIMPLE_TEXT,
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.L_WRWaist__R_WLWaist,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_01]
        },
        {
          description:
            "Raising woman's hands starting down and to the outside on 1-4. Putting her hands on my shoulder on 5-8.",
          simpleText: HANDS_SIMPLE_TEXT,
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_01]
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
        },
        {
          description: 'Sensual CW with WHips, starting with ML-WB.',
          simpleText: HIPS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_02]
        },
        {
          description: 'Sensual CCW with WHips, starting with MR-WB.',
          simpleText: HIPS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_02]
        },
        {
          description: '- As above two, but led with MHips.',
          simpleText: HIPS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual horizontal '8' with WHips. First 2 beats movement of WHips to up and ML, second 2 beats to up and MR.",
          simpleText: HIPS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual combination WHips circle plus horizontal '8' CCW with WHips. Circle starts with MR-WB, and finished on ML after 2 beats. Next 2 beats is the second part of the horizontal '8', the one starting with MR and up.",
          simpleText: HIPS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_02]
        }
      ]
    },

    {
      title: '********** UNSORTED **********',
      variations: []
    }
  ]
};
