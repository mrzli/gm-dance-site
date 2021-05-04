import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const HIPS_SIMPLE_TEXT =
  'Turn from hips; ; CCW *** Sensual circle with hips, led with hands/hips, CW/CCW *** Vertical 8 *** Half CCW + vertical 8';

export const FIGURE_BY_TYPE_OTHER: FigureByTypeSectionGroupData = {
  groupTitle: 'Other',
  sections: [
    {
      title: 'Spread out',
      variations: [
        {
          description:
            'Small moves with LR to ML, then MR, then on beat 3 throw LR to down and WBack and step back, beat 4 tap',
          simpleText: 'Spread out',
          startHold: FigureHold.Open,
          endHold: FigureHold.SpreadOutRL,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_01]
        },
        {
          description:
            'W CCW led with RL waist height, LR nothing, at the end we take WLWrist with MLHand',
          simpleText: 'Wind into R90 from spread out, take wrist',
          startHold: FigureHold.SpreadOutRL,
          endHold: FigureHold.R90__L_WLWrist__RL_WRWaist,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
          ],
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
