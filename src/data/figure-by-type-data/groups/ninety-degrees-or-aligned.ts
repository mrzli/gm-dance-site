import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const ENTER_INTO_R90_SIMPLE_TEXT =
  'Into R90; outer above (O)->(R90_LR_RL-WRWaist/R90_L-WLShoulder_RL-WRWaist), (SpreadOutRL)->(R90_L-WLWrist_RL-WRWaist)';
const COMPLEX_EXIT_FROM_R90_SIMPLE_TEXT = 'R90 complex exit';
const HIP_WALK_SIMPLE_TEXT = 'Hip walk (1 step per 1/2 beats)';
const SEPARATED_ALIGNED_WALK_SIMPLE_TEXT =
  'Separated aligned walk one direction/another direction (hold RL/LR/WLBack-MRBack)';
const R90_SENSUAL_SIMPLE_TEXT = 'Wave normal/sit *** F/B *** D/U *** Bend';

export const FIGURE_BY_TYPE_NINETY_DEGREES_OR_ALIGNED: FigureByTypeSectionGroupData =
  {
    groupTitle: '90 degrees or aligned',
    sections: [
      {
        title: 'Entrances',
        variations: [
          {
            description: 'W CCW, LR above WHead, RL waist height.',
            simpleText: ENTER_INTO_R90_SIMPLE_TEXT,
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
            description: '- As above, but at the end LR over WHead.',
            simpleText: ENTER_INTO_R90_SIMPLE_TEXT,
            startHold: FigureHold.SpreadOutRL,
            endHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            labels: [
              FigureLabel.PeriodFiveToEight,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCcw,
              FigureLabel.TurnWomanDegrees360
            ],
            videos: [FigureVideo.V_003_01]
          },
          {
            description:
              'W CCW led by RR up to a WShoulder, small M CCW to align MRHip to WLHip.',
            simpleText: 'Into aligned (RR)->(RLHipByHip_LL_RR)',
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
            videos: [FigureVideo.V_001_01, FigureVideo.V_002_04]
          },
          {
            description:
              'M+W CW, near the end we release MLHand and let W turn more, keeping contact with MRHand and WLHand.',
            simpleText: 'Together turn to LRHipByHip align',
            startHold: FigureHold.Closed,
            endHold: FigureHold.RLHipToHip__WL_MBack_Over_R_WBack,
            labels: [
              FigureLabel.PeriodFiveToEight,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCw,
              FigureLabel.TurnWomanDegrees360,
              FigureLabel.TurnManTurn,
              FigureLabel.TurnManCw,
              FigureLabel.TurnManDegrees180
            ],
            videos: [FigureVideo.V_003_01]
          }
        ]
      },
      {
        title: 'Exits',
        variations: [
          {
            description: 'W CW, RL in contact, LR nothing.',
            simpleText: 'R90 simple unwind',
            startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            endHold: FigureHold.Open,
            labels: [
              FigureLabel.PeriodOneToFour,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCw,
              FigureLabel.TurnWomanDegrees270
            ],
            videos: [FigureVideo.V_003_02]
          },
          {
            description:
              'W CW, at the beginning we release RL, LL waist height (at the beginning of the movement we drop LL down so woman can turn), at the end we put MRHand on WLHip.',
            simpleText: 'R90 L-WLWrist unwind',
            startHold: FigureHold.R90__L_WLWrist__RL_WRWaist,
            endHold: FigureHold.LL_WRWaistBehindBack__R_WLHip,
            labels: [
              FigureLabel.PeriodOneToFour,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCw,
              FigureLabel.TurnWomanDegrees270
            ],
            videos: [FigureVideo.V_003_01]
          },
          {
            description:
              "Complex exit from R90, part 1. W CW. Man goes around woman in CCW direction. His steps are left-right_forward-left_forward_turn_behind_woman-tap. On beat 3 you also raise LR and go under it. On beat 4 release LR and we put MRHand on WBack. MLHand slides down to woman's waist height during the walk.",
            simpleText: COMPLEX_EXIT_FROM_R90_SIMPLE_TEXT,
            startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            endHold: FigureHold.R90WOnML__L_WLFrontRibs__R_WBack,
            labels: [
              FigureLabel.PeriodOneToFour,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCw,
              FigureLabel.TurnWomanDegrees270,
              FigureLabel.TurnManCcw,
              FigureLabel.TurnManDegrees90
            ],
            videos: [FigureVideo.V_002_01]
          },
          {
            description:
              'Complex exit from R90, part 2. W CCW, we follow and go into closed position.',
            simpleText: COMPLEX_EXIT_FROM_R90_SIMPLE_TEXT,
            startHold: FigureHold.R90WOnML__L_WLFrontRibs__R_WBack,
            endHold: FigureHold.Closed,
            labels: [
              FigureLabel.PeriodFiveToEight,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCcw,
              FigureLabel.TurnWomanDegrees630,
              FigureLabel.TurnManTurn,
              FigureLabel.TurnManCcw,
              FigureLabel.TurnManDegrees180
            ],
            videos: [FigureVideo.V_002_01]
          },
          {
            description:
              'W CW, LL above WHead, RR shoulder to waist height. Change to normal hold at the end.',
            simpleText: 'R90 exit, LL above (R90_LL_RR)->(O)',
            startHold: FigureHold.R90__LL__RR_WRShoulder,
            endHold: FigureHold.LRAndRLClose,
            labels: [
              FigureLabel.MovementStanding,
              FigureLabel.PeriodOneToFour,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCw,
              FigureLabel.TurnWomanDegrees270
            ],
            videos: [FigureVideo.V_002_04]
          },
          {
            description: 'W CCW, LR shoulder height, RL nothing.',
            simpleText: 'L90 exit LR above',
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
            description: 'W CW, and small M CW to face the woman.',
            simpleText: 'Aligned exit (RLHipByHip_LL_RR)->(LL>RR)',
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
          },
          {
            description:
              'Exit from separated aligned walk, holding hands. On beat 3 throw holding hands in direction opposite of movement. Get in contact with LR.',
            simpleText: 'Separated aligned walk exit',
            startHold: FigureHold.RLHipToHip__RL,
            endHold: FigureHold.Open,
            labels: [
              FigureLabel.PeriodOneToFour,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCcw,
              FigureLabel.TurnWomanDegrees180,
              FigureLabel.TurnManTurn,
              FigureLabel.TurnManCw,
              FigureLabel.TurnManDegrees180
            ],
            videos: [FigureVideo.V_003_01]
          }
        ]
      },
      {
        title: 'Moves',
        variations: [
          {
            description: 'W CW, LR shoulder height, RL waist height.',
            simpleText: 'R90 to L90',
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
            description:
              'Small twists with a woman. In 1 beat we move the woman slightly CW, and also turn ourselves to face WLSide. In 1 beat we twist her back. On next 2 beats we repeat.',
            simpleText: 'R90 small twists',
            startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
            endHold: FigureHold.R90__LL__RR_WRShoulder,
            labels: [
              FigureLabel.PeriodFiveToEight,
              FigureLabel.TurnManCw,
              FigureLabel.TurnManDegrees90
            ],
            videos: [FigureVideo.V_002_04]
          },
          {
            description: 'Hip to hip walk.',
            simpleText: HIP_WALK_SIMPLE_TEXT,
            startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
            endHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
            labels: [FigureLabel.PeriodOneToEight],
            videos: [FigureVideo.V_001_01]
          },
          {
            description:
              '- As above, but twice as slow. Each step is 2 beats. Two steps total.',
            simpleText: HIP_WALK_SIMPLE_TEXT,
            startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
            endHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
            labels: [FigureLabel.PeriodOneToFour],
            videos: [FigureVideo.V_002_04]
          },
          {
            description:
              'Separated aligned walk, holding hands. On beat 3 throw holding hands in direction opposite of movement.',
            simpleText: SEPARATED_ALIGNED_WALK_SIMPLE_TEXT,
            startHold: FigureHold.RLHipToHip__RL,
            endHold: FigureHold.LRHipToHip__LR,
            labels: [
              FigureLabel.PeriodOneToFour,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCcw,
              FigureLabel.TurnWomanDegrees180,
              FigureLabel.TurnManTurn,
              FigureLabel.TurnManCw,
              FigureLabel.TurnManDegrees180
            ],
            videos: [FigureVideo.V_003_01]
          },
          {
            description: '- As above, but opposite direction.',
            simpleText: SEPARATED_ALIGNED_WALK_SIMPLE_TEXT,
            startHold: FigureHold.LRHipToHip__LR,
            endHold: FigureHold.RLHipToHip__RL,
            labels: [
              FigureLabel.PeriodFiveToEight,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCw,
              FigureLabel.TurnWomanDegrees180,
              FigureLabel.TurnManTurn,
              FigureLabel.TurnManCcw,
              FigureLabel.TurnManDegrees180
            ],
            videos: [FigureVideo.V_003_01]
          },
          {
            description: '- As first, but hands on backs.',
            simpleText: SEPARATED_ALIGNED_WALK_SIMPLE_TEXT,
            startHold: FigureHold.RLHipToHip__WL_MBack_Over_R_WBack,
            endHold: FigureHold.LRHipToHip__LR,
            labels: [
              FigureLabel.PeriodOneToFour,
              FigureLabel.TurnWomanTurn,
              FigureLabel.TurnWomanCcw,
              FigureLabel.TurnWomanDegrees180,
              FigureLabel.TurnManTurn,
              FigureLabel.TurnManCw,
              FigureLabel.TurnManDegrees180
            ],
            videos: [FigureVideo.V_003_01]
          }
        ]
      },
      {
        title: 'Sensual',
        variations: [
          {
            description: 'Sensual, normal front wave.',
            simpleText: R90_SENSUAL_SIMPLE_TEXT,
            startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            endHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            labels: [FigureLabel.PeriodFourBeats],
            videos: [FigureVideo.V_002_01]
          },
          {
            description: 'Sensual, front wave with sitting.',
            simpleText: R90_SENSUAL_SIMPLE_TEXT,
            startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            endHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            labels: [FigureLabel.PeriodOneToEight],
            videos: [FigureVideo.V_002_01]
          },
          {
            description: 'Forward/backward, in 2 beats.',
            simpleText: R90_SENSUAL_SIMPLE_TEXT,
            startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            endHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            labels: [FigureLabel.PeriodTwoBeats],
            videos: [FigureVideo.V_003_02]
          },
          {
            description: 'Down/up, in 2 beats.',
            simpleText: R90_SENSUAL_SIMPLE_TEXT,
            startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            endHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            labels: [FigureLabel.PeriodTwoBeats],
            videos: [FigureVideo.V_003_02]
          },
          {
            description: 'Waist bend, in 4 beats.',
            simpleText: R90_SENSUAL_SIMPLE_TEXT,
            startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            endHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
            labels: [FigureLabel.PeriodFourBeats],
            videos: [FigureVideo.V_003_02]
          }
        ]
      }
    ]
  };
