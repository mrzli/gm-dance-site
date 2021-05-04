import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const ISOLATION_SHOULDER_SIMPLE_TEXT = 'Shoulders; up/down; arc (1/2 beats)';
const ISOLATION_CHEST_SIMPLE_TEXT =
  'Chest; L/R; B/F (1/2 beats); CW/CCW (large/small); Half CCW + tilt';
const NECK_SIMPLE_TEXT = 'Neck ML->MR';
const FRONT_WAVE_SIMPLE_TEXT = 'Enter; exit simple/sit tilt/sit yaw';
const FIGURE_LATERAL_SIMPLE_TEXT = 'L,R, to me, sit, up (C/PalmOnPalm)';
const STYLISTIC_FOOTWORK_SIMPLE_TEXT = 'Push into ground *** Swaying';

export const FIGURE_BY_TYPE_SENSUAL: FigureByTypeSectionGroupData = {
  groupTitle: 'Sensual',
  sections: [
    {
      title: 'Isolations',
      variations: [
        {
          description:
            "Sensual diagonal lifting-lowering of woman's shoulders, lift up sequence is ML-MR-ML-nothing. Block with MLKnee.",
          simpleText: ISOLATION_SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above, but lift sequence is MR-ML-MR-nothing and on 5-8.',
          simpleText: ISOLATION_SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            'Sensual arc with WRShoulder, 2 beats to move back, 2 beats to return. Block with MLKnee.',
          simpleText: ISOLATION_SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description: '- As above, but with WLShoulder, and on 5-8.',
          simpleText: ISOLATION_SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above (either WLShoulder or WRShoulder), but each movement is 1 beat.',
          simpleText: ISOLATION_SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual movement of woman's chest in lateral direction, sequence is ML-MR-ML-nothing. Block with MLKnee.",
          simpleText: ISOLATION_CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above, but direction sequence is MR-ML-MR-nothing and on 5-8.',
          simpleText: ISOLATION_CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual movement of woman's chest in forward/backward direction, sequence is WF-WB, each movement 2 beats. Block with MLKnee.",
          simpleText: ISOLATION_CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour, FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description: '- As above, but each movement is 1 beat.',
          simpleText: ISOLATION_CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual large circle with woman's chest in CW direction, starting with ML-WB. Block with MLKnee.",
          simpleText: ISOLATION_CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [
            FigureVideo.V_002_Pokreti_01,
            FigureVideo.V_002_Pokreti_02,
            FigureVideo.V_002_03
          ]
        },
        {
          description:
            '- As above, but chest movement is in CCW direction, starting with MR-WB.',
          simpleText: ISOLATION_CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description: '- As above (either CW or CCW), but small circle.',
          simpleText: ISOLATION_CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above (large CCW circle), but only half of it in 2 beats. Next 1 beat is continued into bending WUpperPart to ML. Last 1 beat is straightening the woman.',
          simpleText: ISOLATION_CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_03]
        }
      ]
    },
    {
      title: 'Neck movements',
      variations: [
        {
          description:
            'Neck bend. Lasts 2 beats, usually 5-6. Can do step-tap on 7-8.',
          simpleText: NECK_SIMPLE_TEXT,
          startHold: FigureHold.LR__R_WRShoulder,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        }
      ]
    },
    {
      title: 'Front facing waves',
      variations: [
        {
          description:
            'Frontal wave entering. In 2 beats, orient woman to ML (this is actually a lateral wave to ML). Next 2 beats start wave to MR.',
          simpleText: FRONT_WAVE_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_002_01]
        },
        {
          description:
            'Frontal wave simple exit. Continue from frontal wave entering. 2 beats to finish the started wave, to the ML. Next 2 beats return woman in front of yourself, starting by raising WRShoulder.',
          simpleText: FRONT_WAVE_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_002_01]
        },
        {
          description:
            'Frontal wave with sitting exit. Continue from frontal wave entering (maybe pull a woman in that part a bit further MR and up). 2 beats to finish the started wave with a sit, to the ML. Next 2 beats return woman in front of yourself, starting by raising WLShoulder.',
          simpleText: FRONT_WAVE_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_002_01]
        },
        {
          description:
            '- As above, but last 2 beats are different. 1 beat rotate the woman CW a bit to position her in front of yourself, then in 1 beat simply raise both of you.',
          simpleText: FRONT_WAVE_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_002_01]
        }
      ]
    },
    {
      title: 'Figures',
      variations: [
        {
          description:
            'Lateral movement of WChest with WShoulder lifts. To ML on 1-2, MR on 3-4. On 5-8 we continue with WUpperBody CCW with WB bend.',
          simpleText: 'L,R CCW WUpperBody',
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [
            FigureVideo.V_002_Pokreti_01,
            FigureVideo.V_002_Pokreti_02,
            FigureVideo.V_002_02
          ]
        },
        {
          description:
            'Basic for 2 beats. Then vertical CW circle led with hips, starting with down and ML, 4 beats. 1 beat to lift WRShoulder and move WChest to ML. 1 beat to straighten the woman.',
          simpleText: 'Basic, vertical CCW hips, tilt',
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_02]
        },
        {
          description:
            'Lateral wave to ML in 2 beats, then to MR in another 2 beats. Next 3 beats is a frontal wave (starting towards me) with sitting down. Last 1 beat is stepping a bit forward and lifting ourselves up.',
          simpleText: FIGURE_LATERAL_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_02]
        },
        {
          description: '- As above, but hold is open palm on palm.',
          simpleText: FIGURE_LATERAL_SIMPLE_TEXT,
          startHold: FigureHold.OpenPalmOnPalm,
          endHold: FigureHold.OpenPalmOnPalm,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_03]
        }
      ]
    },
    {
      title: 'Stylistic',
      variations: [
        {
          description: 'Small movement with feet going push-tap-step-tap.',
          simpleText: STYLISTIC_FOOTWORK_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_01]
        },
        {
          description: '- As above, but in opposite direction.',
          simpleText: STYLISTIC_FOOTWORK_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_01]
        },
        {
          description:
            'Stylistic swaying left-right. Can be 4 beats or 8 beats (simply repeated twice).',
          simpleText: STYLISTIC_FOOTWORK_SIMPLE_TEXT,
          startHold: FigureHold.SemiClosed,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_001_02]
        },
        {
          description: 'Stylized CW windmill in contact with WRWrist.',
          simpleText: 'Basic 5-8 CW windmill LR wrist-on-wrist',
          startHold: FigureHold.SemiClosed,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_02]
        },
        {
          description: 'RL windmill over WHead.',
          simpleText: 'RL windmill over WHead',
          startHold: FigureHold.Open,
          endHold: FigureHold.LR__R_WRShoulder,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01]
        },
        {
          description:
            'RL CCW windmill, 2 turns. At the end we take RL normally.',
          simpleText: 'RL wrist windmill (2 turns)',
          startHold: FigureHold.LR__MRWrist_WLWrist,
          endHold: FigureHold.Open,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_01]
        },
        {
          description:
            'RL over MHead into LR_RL-MLShoulderWLHandBehindMNeck, then we release RL, and step into semi-closed hold. Can be performed after W CW.',
          simpleText: 'RL under chin over MHead',
          startHold: FigureHold.Open,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_03]
        }
      ]
    }
  ]
};
