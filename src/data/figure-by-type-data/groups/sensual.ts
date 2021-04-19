import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_SENSUAL: FigureByTypeSectionGroupData = {
  title: 'Sensual',
  sections: [
    {
      title: 'Sensual - front facing',
      variations: []
    },
    {
      title: 'Stylistic',
      variations: [
        {
          description: 'Small movement with feet going push-tap-step-tap.',
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_01]
        },
        {
          description: '- As above, but in opposite direction.',
          startHold: FigureHold.Closed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_01]
        },
        {
          description: 'Stylized CW windmill in contact with WRWrist.',
          startHold: FigureHold.SemiClosed,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_02]
        },
        {
          description:
            'Stylistic swaying left-right. Can be 4 beats or 8 beats (simply repeated twice).',
          startHold: FigureHold.SemiClosed,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_001_02]
        }
      ]
    }
  ]
};
