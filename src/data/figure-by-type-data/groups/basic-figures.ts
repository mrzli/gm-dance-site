import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';

export const FIGURE_BY_TYPE_GROUP_BASIC_FIGURES: FigureByTypeSectionGroupData = {
  title: 'Basic figures',
  sections: [
    {
      title: 'Basic steps',
      variations: [
        {
          description: 'Basic.',
          startHold: FigureHold.Open,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_001_Pokreti]
        },
        {
          description: 'Slow.',
          startHold: FigureHold.Open,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_001_Pokreti]
        },
        {
          description: 'Forward-backward.',
          startHold: FigureHold.Open,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_001_Pokreti]
        },
        {
          description: '- As above, but in semi-closed hold.',
          startHold: FigureHold.SemiClosed,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_001_02]
        }
      ]
    },
    {
      title: 'Simple position changes',
      variations: [
        {
          description: 'Pull woman to yourself / move into a closed hold.',
          startHold: FigureHold.Open,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_001_Pokreti]
        },
        {
          description: 'Push woman from yourself / push yourself from woman.',
          startHold: FigureHold.Closed,
          endHold: FigureHold.Open,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_001_Pokreti]
        },
        {
          description: 'WLHand throw back.',
          startHold: FigureHold.Open,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_Pokreti, FigureVideo.V_001_02]
        },
        {
          description: 'WRHand throw back.',
          startHold: FigureHold.SemiClosed,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_Pokreti]
        }
      ]
    }
  ]
};
