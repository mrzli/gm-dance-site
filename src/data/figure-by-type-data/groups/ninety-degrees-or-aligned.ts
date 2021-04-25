import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_NINETY_DEGREES_OR_ALIGNED: FigureByTypeSectionGroupData = {
  title: '90 degrees or aligned',
  sections: [
    {
      title: 'Entrances',
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
          videos: [FigureVideo.V_001_01, FigureVideo.V_002_04]
        }
      ]
    },
    {
      title: 'Exits',
      variations: [
        {
          description:
            'W CCW, LL above WHead, RR shoulder to waist height. Change to normal hold at the end.',
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
        },
        {
          description:
            "Complex exit from R90, part 1. W CW. Man goes around woman in CCW direction. His steps are left-right_forward-left_forward_turn_behind_woman-tap. On beat 3 you also raise LR and go under it. On beat 4 release LR and we put MRHand on WBack. MLHand slides down to woman's waist height during the walk.",
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
        }
      ]
    },
    {
      title: 'Moves',
      variations: [
        {
          description: 'Hip to hip walk.',
          startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
          endHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_001_01]
        },
        {
          description:
            '- As above, but twice as slow. Each step is 2 beats. Two steps total.',
          startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
          endHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_04]
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
          description:
            'Small twists with a woman. In 1 beat we move the woman slightly CW, and also turn ourselves to face WLSide. In 1 beat we twist her back. On next 2 beats we repeat.',
          startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
          endHold: FigureHold.R90__LL__RR_WRShoulder,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees90
          ],
          videos: [FigureVideo.V_002_04]
        }
      ]
    },
    {
      title: 'Sensual',
      variations: [
        {
          description: 'Sensual, normal front wave.',
          startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
          endHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_01]
        },
        {
          description: 'Sensual, front wave with sitting.',
          startHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
          endHold: FigureHold.R90__L_WLShoulder__RL_WRWaist,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_01]
        }
      ]
    }
  ]
};
