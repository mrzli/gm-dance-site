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
            "Throwing woman's hands starting down and to the outside, and putting my hands on her back.",
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_02, FigureVideo.V_002_04]
        },
        {
          description: '- As above, but putting my hands on her waist.',
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.L_WRWaist__R_WLWaist,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_01]
        },
        {
          description:
            "Raising woman's hands starting down and to the outside on 1-4. Putting her hands on my shoulder on 5-8.",
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
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_02]
        },
        {
          description: 'Sensual CCW with WHips, starting with MR-WB.',
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_02]
        },
        {
          description: '- As above two, but led with MHips.',
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual horizontal '8' with WHips. First 2 beats movement of WHips to up and ML, second 2 beats to up and MR.",
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual combination WHips circle plus horizontal '8' CCW with WHips. Circle starts with MR-WB, and finished on ML after 2 beats. Next 2 beats is the second part of the horizontal '8', the one starting with MR and up.",
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_02]
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
      title: '********** UNSORTED **********',
      variations: []
    }
  ]
};
