import { FigureByTypeSectionData } from '../types/domain/figure-by-type/figure-by-type-section-data';
import { FigureHold } from '../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_DATA: readonly FigureByTypeSectionData[] = [
  {
    title: 'Basic steps',
    variations: [
      {
        description: 'Basic',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [FigureLabel.Basic],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'Forward-backward',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [FigureLabel.Basic],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'Slow',
        startHold: FigureHold.Open,
        endHold: FigureHold.Open,
        labels: [FigureLabel.Basic],
        videos: [FigureVideo.V_001_Pokreti]
      }
    ]
  },
  {
    title: 'Simple position changes',
    variations: [
      {
        description: 'Pull woman to yourself / move into a closed hold',
        startHold: FigureHold.Open,
        endHold: FigureHold.Closed,
        labels: [FigureLabel.SimplePositionChange],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'Push woman from yourself / push yourself from woman',
        startHold: FigureHold.Closed,
        endHold: FigureHold.Open,
        labels: [FigureLabel.SimplePositionChange],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'WLH throw back',
        startHold: FigureHold.Open,
        endHold: FigureHold.SemiClosed,
        labels: [FigureLabel.SimplePositionChange],
        videos: [FigureVideo.V_001_Pokreti]
      },
      {
        description: 'WRH throw back',
        startHold: FigureHold.SemiClosed,
        endHold: FigureHold.Closed,
        labels: [FigureLabel.SimplePositionChange],
        videos: [FigureVideo.V_001_Pokreti]
      }
    ]
  }
];
