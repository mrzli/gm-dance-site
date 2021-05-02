import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const WIF_ENTER_SIMPLE_TEXT =
  'Enter - throw hand/turn on 6/turn on 6 with over WHead';
const WIF_EXIT_PUSH_MR_SIMPLE_TEXT = 'LL push MR, go under';
const WIF_EXIT_TURN_SIMPLE_TEXT = '1.5 W turn ->(O/SC)';
const WIF_SIMPLE_MOVES_SIMPLE_TEXT =
  'Basic (normal/sensual hand movement) *** Slow *** Hip (CW)';
const WIF_WAVES_SIMPLE_TEXT = 'Wave normal/sit/intermittent';

export const FIGURE_BY_TYPE_BACK_TURNED_WOMEN: FigureByTypeSectionGroupData = {
  groupTitle: 'Women in front, back turned',
  sections: [
    {
      title: 'Entrances',
      variations: [
        {
          description:
            'Entering into woman in front, back turned. Throwing WRHand to WB with MLHand in 2 beats. In 2 beats leading W CCW with MLHand on WRUpperHand. Taking LL at the end.',
          simpleText: WIF_ENTER_SIMPLE_TEXT,
          startHold: FigureHold.Closed,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [
            FigureLabel.PeriodOneToFour,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180
          ],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            'Entering into woman in front, back turned. W CCW, LR over WHead, RL waist height, on 5-6. We stop the woman with MRHand on WRHip on 6. We release both hands on 7, take LL and put MRHand on WRFrontRibs on 8.',
          simpleText: WIF_ENTER_SIMPLE_TEXT,
          startHold: FigureHold.Open,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180
          ],
          videos: [FigureVideo.V_001_03, FigureVideo.V_002_03]
        },
        {
          description:
            '- As above, except on 7 we move LR over WHead, and on 8 we release MLHand and slide it down WLShoulder and WLHand and take LL.',
          simpleText: WIF_ENTER_SIMPLE_TEXT,
          startHold: FigureHold.Open,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCcw,
            FigureLabel.TurnWomanDegrees180
          ],
          videos: [FigureVideo.V_001_03]
        }
      ]
    },
    {
      title: 'Exits',
      variations: [
        {
          description:
            'Exit from woman in front, back turned. Before the start of the figure LL is straightened to MLeft. We push straitened LL to MRight on 5-6. On 7 we raise LL and step forward. On 8 we step in from of the woman and turn, taking her in closed hold.',
          simpleText: WIF_EXIT_PUSH_MR_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.Closed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnManTurn,
            FigureLabel.TurnManCw,
            FigureLabel.TurnManDegrees180
          ],
          videos: [FigureVideo.V_001_03, FigureVideo.V_002_03]
        },
        {
          description:
            'Exit from woman in front, back turned. W CW LL over WHead, RR nothing. At the end, we release LL into RL',
          simpleText: WIF_EXIT_TURN_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.Open,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees540
          ],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            '- As above, but at the end also LL over MHead, and then we release LL.',
          simpleText: WIF_EXIT_TURN_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.SemiClosed,
          labels: [
            FigureLabel.PeriodFiveToEight,
            FigureLabel.TurnWomanTurn,
            FigureLabel.TurnWomanCw,
            FigureLabel.TurnWomanDegrees540
          ],
          videos: [FigureVideo.V_002_Pokreti_04]
        }
      ]
    },
    {
      title: 'Moves',
      variations: [
        {
          description: 'Basic with woman in front, back turned.',
          simpleText: WIF_SIMPLE_MOVES_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_03]
        },
        {
          description:
            '- As above, but also sensual movement of LL to MR then ML',
          simpleText: WIF_SIMPLE_MOVES_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_03]
        },
        {
          description: 'Slow with woman in front, back turned.',
          simpleText: WIF_SIMPLE_MOVES_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04]
        },
        {
          description:
            'W Hip CW, led by our hips, starting with MLeft then MForward.',
          simpleText: WIF_SIMPLE_MOVES_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_001_03]
        }
      ]
    },
    {
      title: 'Sensual',
      variations: [
        {
          description: 'Normal front wave.',
          simpleText: WIF_WAVES_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_002_03]
        },
        {
          description: 'Front wave with sit.',
          simpleText: WIF_WAVES_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodOneToEight],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_002_03]
        },
        {
          description: 'Intermittent front wave.',
          simpleText: WIF_WAVES_SIMPLE_TEXT,
          startHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          endHold: FigureHold.WWithBack__LL__R_WRFrontRibs,
          labels: [FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_04, FigureVideo.V_002_03]
        }
      ]
    }
  ]
};
