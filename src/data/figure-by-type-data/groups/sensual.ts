import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const NECK_SIMPLE_TEXT = 'W/M neck ML->MR 2/4 beats; with/without hip circle';
const SHOULDER_SIMPLE_TEXT = 'Shoulders; up/down; arc (1/2 beats)';
const CHEST_SIMPLE_TEXT =
  'Chest; L/R; B/F (1/2 beats); CW/CCW (large/small); Half CCW + tilt';
const HIPS_SIMPLE_TEXT =
  'Sensual circle with hips, led with hands/hips, CW/CCW *** Vertical 8 *** Half CCW + vertical 8';
const KNEE_SIMPLE_TEXT =
  'Sensual circle with hips, led with knee, CW *** Half CCW + tilt';
const BODY_SIMPLE_TEXT = 'Push into ground *** Swaying SC *** Swaying L-R C';
const FRONT_WAVE_SIMPLE_TEXT = 'Enter; exit simple/sit tilt/sit yaw';
const FIGURE_L90_W_LEAN_BACK_AND_SIT = 'L90 W lean and sit';
const FIGURE_LATERAL_SIMPLE_TEXT = 'L,R, to me, sit, up (C/PalmOnPalm)';

export const FIGURE_BY_TYPE_SENSUAL: FigureByTypeSectionGroupData = {
  groupTitle: 'Sensual',
  sections: [
    {
      title: 'Neck movements',
      variations: [
        {
          description:
            'W neck bend, ML->MR. Lasts 2 beats, usually 5-6. Can do step-tap on 7-8.',
          simpleText: NECK_SIMPLE_TEXT,
          startHold: FigureHold.LR__R_WRShoulder,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above, but lasts 4 beats. M can also do CW circle with hips, starting with MR-MB.',
          simpleText: NECK_SIMPLE_TEXT,
          startHold: FigureHold.LR__R_WRShoulder,
          endHold: FigureHold.LR__R_WLShoulder,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_003_03]
        },
        {
          description: 'M neck bend, ML->MR. 4 beats.',
          simpleText: NECK_SIMPLE_TEXT,
          startHold: FigureHold.RL_Nothing__LR_MLShoulderBehindNeck,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_003_02]
        },
        {
          description: '- As above, but 2 beats.',
          simpleText: NECK_SIMPLE_TEXT,
          startHold: FigureHold.RL_Nothing__LR_MLShoulderBehindNeck,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_003_03]
        }
      ]
    },
    {
      title: 'Upper body movements',
      variations: [
        {
          description:
            "Sensual diagonal lifting-lowering of woman's shoulders, lift up sequence is ML-MR-ML-nothing. Block with MLKnee.",
          simpleText: SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above, but lift sequence is MR-ML-MR-nothing and on 5-8.',
          simpleText: SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            'Sensual arc with WRShoulder, 2 beats to move back, 2 beats to return. Block with MLKnee.',
          simpleText: SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description: '- As above, but with WLShoulder, and on 5-8.',
          simpleText: SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above (either WLShoulder or WRShoulder), but each movement is 1 beat.',
          simpleText: SHOULDER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual movement of woman's chest in lateral direction, sequence is ML-MR-ML-nothing. Block with MLKnee.",
          simpleText: CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above, but direction sequence is MR-ML-MR-nothing and on 5-8.',
          simpleText: CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual movement of woman's chest in forward/backward direction, sequence is WF-WB, each movement 2 beats. Block with MLKnee.",
          simpleText: CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour, FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description: '- As above, but each movement is 1 beat.',
          simpleText: CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            "Sensual large circle with woman's chest in CW direction, starting with ML-WB. Block with MLKnee.",
          simpleText: CHEST_SIMPLE_TEXT,
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
          simpleText: CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description: '- As above (either CW or CCW), but small circle.',
          simpleText: CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_Pokreti_02]
        },
        {
          description:
            '- As above (large CCW circle), but only half of it in 2 beats. Next 1 beat is continued into bending WUpperPart to ML. Last 1 beat is straightening the woman.',
          simpleText: CHEST_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_03]
        }
      ]
    },
    {
      title: 'Hand movements',
      variations: [
        {
          description: 'RL windmill over WHead.',
          simpleText: 'RL windmill over WHead',
          startHold: FigureHold.Open,
          endHold: FigureHold.LR__R_WRShoulder,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_003_03]
        },
        {
          description: 'LR windmill over MHead.',
          simpleText: 'LR windmill over MHead',
          startHold: FigureHold.Open,
          endHold: FigureHold.RL_Nothing__LR_MLShoulderBehindNeck,
          labels: [FigureLabel.MovementStanding, FigureLabel.PeriodTwoBeats],
          videos: [FigureVideo.V_003_03]
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
        },
        {
          description:
            'RL elbow over WLHand. We let go of RL and take LL over RR.',
          simpleText: 'RL elbow over WLHand into LL>RR',
          startHold: FigureHold.Open,
          endHold: FigureHold.LLOverRR,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_04]
        }
      ]
    },
    {
      title: 'Hip movements',
      variations: [
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
            "Sensual combination WHips CCW circle plus horizontal '8'. Circle starts with MR-WB, and finished on ML after 2 beats. Next 2 beats is the second part of the horizontal '8', the one starting with MR and up.",
          simpleText: HIPS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRHip__R_WLHip,
          endHold: FigureHold.L_WRHip__R_WLHip,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_02]
        }
      ]
    },
    {
      title: 'Knee movements',
      variations: [
        {
          description:
            'Sensual CW of WHips led with MDKnee, starting with ML-WB.',
          simpleText: KNEE_SIMPLE_TEXT,
          startHold: FigureHold.ClosedMRKneeBetween,
          endHold: FigureHold.ClosedMRKneeBetween,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_02]
        },
        {
          description:
            'Sensual CCW of WHips led with MDKnee, starting with MR-WB, but only half of it in 2 beats. Next 1 beat is continued into bending WUpperPart to ML. Last 1 beat is straightening the woman.',
          simpleText: KNEE_SIMPLE_TEXT,
          startHold: FigureHold.ClosedMRKneeBetween,
          endHold: FigureHold.ClosedMRKneeBetween,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_02]
        }
      ]
    },
    {
      title: 'Body movements',
      variations: [
        {
          description: 'Small movement with feet going push-tap-step-tap.',
          simpleText: BODY_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_01]
        },
        {
          description: '- As above, but in opposite direction.',
          simpleText: BODY_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_01]
        },
        {
          description:
            'Stylistic swaying ML-MR in semi-closed position, 2 beats each direction.',
          simpleText: BODY_SIMPLE_TEXT,
          startHold: FigureHold.SemiClosed,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_001_02]
        },
        {
          description:
            'Swaying ML-MR in closed position, 2 beats each direction.',
          simpleText: BODY_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_003_02]
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
      title: 'Lean',
      variations: [
        {
          description:
            'WUpperBody leaning to WBack in 1-4, we also drop down a bit on 3-4. At 5-8 we push WHips with MLHand and go up.',
          simpleText: 'W lean back with drop, exit with hip push',
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_003_02]
        },
        {
          description:
            'Enter woman L90 lean and sit. First pull woman toward yourself and W CCW both above WHead. RR continues over MHead, and WRHand remains on MBack. LL is led flowing from the turn into an a sort of CCW windmill arc straight to above woman. We out MRHand on WLWaist.',
          simpleText: FIGURE_L90_W_LEAN_BACK_AND_SIT,
          startHold: FigureHold.LLOverRR,
          endHold: FigureHold.L90__LR_StraightUp__R_WLWaist,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees90
          ],
          videos: [FigureVideo.V_003_04]
        },
        {
          description:
            'Continued from entrance L90 lean and sit. LL continues to flow to WBack and pulls WUpperBody back. Almost immediately we release LL and put MLHand on WBack. Movement to WBack lasts for 2 beats. In the next 2 beats we straighten the woman back.',
          simpleText: FIGURE_L90_W_LEAN_BACK_AND_SIT,
          startHold: FigureHold.L90__LR_StraightUp__R_WLWaist,
          endHold: FigureHold.L90__L_WBack__R_WLWaist,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_04]
        },
        {
          description:
            'Woman L90 sit. Push WHips with MRHand down to a sit position in 1 beat. In 3 beats pull WHips with MRHand to straighten the woman up, and orient her to face the man.',
          simpleText: FIGURE_L90_W_LEAN_BACK_AND_SIT,
          startHold: FigureHold.L90__L_WBack__R_WLWaist,
          endHold: FigureHold.L_WRShoulder__R_WLWaist,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_003_04]
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
    }
  ]
};
