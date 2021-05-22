import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const HIPS_SIMPLE_TEXT = 'Turn from hips; ; CCW';

export const FIGURE_BY_TYPE_OTHER: FigureByTypeSectionGroupData = {
  groupTitle: 'Other',
  sections: [
    {
      title: 'Spread out',
      variations: [
        {
          description:
            'Small moves with LR to ML, then MR, then on beat 3 throw LR to down and WBack and step back, beat 4 tap',
          simpleText: 'MR,ML, spread out RL',
          startHold: FigureHold.Open,
          endHold: FigureHold.SpreadOutRL,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_01]
        }
      ]
    },
    {
      title: 'Hip/waist leading',
      variations: [
        {
          description:
            'W CCW led from hips, then putting MRHand on WBack while turning.',
          simpleText: HIPS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRWaist__R_WLWaist,
          endHold: FigureHold.Closed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees360
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
