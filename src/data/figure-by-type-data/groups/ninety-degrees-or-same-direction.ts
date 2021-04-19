import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_NINETY_DEGREES_OR_SAME_ORIENTATION: FigureByTypeSectionGroupData = {
  title: '90 degrees or same orientation',
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
          videos: [FigureVideo.V_001_01]
        }
      ]
    },
    {
      title: 'Exits',
      variations: [
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
      title: 'Walks',
      variations: [
        {
          description: 'Hip to hip walk.',
          startHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
          endHold: FigureHold.RLHipToHip__LL__RR_WRShoulder,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_001_01]
        }
      ]
    },
    {
      title: '90 degrees internal',
      variations: [
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
        }
      ]
    }
  ]
};
