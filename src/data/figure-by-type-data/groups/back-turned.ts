import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

export const FIGURE_BY_TYPE_BACK_TURNED: FigureByTypeSectionGroupData = {
  title: 'Back turned',
  sections: [
    {
      title: 'Woman in front, back turned',
      variations: [
        {
          description:
            'W CCW, LR over WHead, RL waist height, on 5-6. We stop the woman with MRHand on WRHip on 6. We release both hands on 7, take LL and put MRHand on WRFrontRibs on 8.',
          startHold: FigureHold.Open,
          endHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180
          ],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            '- As above, except on 7 we move LR over WHead, and on 8 we release MLHand and slide it down WLShoulder and WLHand and take LL.',
          startHold: FigureHold.Open,
          endHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180
          ],
          videos: [FigureVideo.V_001_03]
        },
        {
          description: 'Basic with woman in front, back turned.',
          startHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          labels: [],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            'W Hip CW, led by our hips, starting with MLeft then MForward.',
          startHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            'Exit from woman in front, back turned. Before the start of the figure LL is straitened to MLeft. We push straitened LL to MRight on 5-6. On 7 we raise LL and step forward. On 8 we step in from of the woman and turn, taking her in closed hold.',
          startHold: FigureHold.WWIthBack__LL__R_WRFrontRibs,
          endHold: FigureHold.Closed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_001_03]
        }
      ]
    }
  ]
};
