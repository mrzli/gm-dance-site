import { FigureByTypeSectionData } from '../types/domain/figure-by-type/figure-by-type-section-data';
import { FigureHold } from '../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_DATA: readonly FigureByTypeSectionData[] = [
  {
    title: 'Basic',
    variations: [
      {
        description: 'Simple basic',
        startHold: FigureHold.O,
        endHold: FigureHold.O,
        labels: [FigureLabel.Basic],
        videos: [FigureVideo.V_001_Pokreti]
      }
    ]
  }
];
