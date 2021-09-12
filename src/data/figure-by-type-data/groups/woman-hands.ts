import { FigureByTypeSectionGroupData } from '../../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FigureHold } from '../../../types/domain/figure-by-type/enums/figure-hold';
import { FigureLabel } from '../../../types/domain/figure-by-type/enums/figure-label';
import { FigureVideo } from '../../../types/domain/figure-by-type/enums/figure-video';

const RAISING_THROWING_HANDS_SIMPLE_TEXT =
  'Throw ->(MHands on back/on waist) *** Raising moving/standing still ->(WHands on MShoulders/gliding WLHand down to SC)';

export const FIGURE_BY_TYPE_WOMAN_HANDS: FigureByTypeSectionGroupData = {
  groupTitle: 'Woman hands',
  sections: [
    {
      title: "Raising/throwing woman's hands directly above",
      variations: [
        {
          description:
            'Throwing WHands starting down and to the outside, and putting my hands on her back.',
          simpleText: RAISING_THROWING_HANDS_SIMPLE_TEXT,
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodFourBeats],
          videos: [FigureVideo.V_002_Pokreti_02, FigureVideo.V_002_04]
        },
        {
          description: '- As above, but putting my hands on her waist.',
          simpleText: RAISING_THROWING_HANDS_SIMPLE_TEXT,
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.L_WRWaist__R_WLWaist,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_001_01]
        },
        {
          description:
            'Raising WHands starting down and to the outside on 1-4.',
          simpleText: RAISING_THROWING_HANDS_SIMPLE_TEXT,
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.L_WRWristStraightUp__R_WLWristStraightUp,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_01]
        },
        {
          description: '- As above, but standing still.',
          simpleText: RAISING_THROWING_HANDS_SIMPLE_TEXT,
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.L_WRWristStraightUp__R_WLWristStraightUp,
          labels: [FigureLabel.MovementStanding, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_06]
        },
        {
          description: 'Putting WHands from straight up to my shoulder on 5-8.',
          simpleText: RAISING_THROWING_HANDS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRWristStraightUp__R_WLWristStraightUp,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_01]
        },
        {
          description: 'Putting WHands from straight up to my shoulder on 5-8.',
          simpleText: RAISING_THROWING_HANDS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRWristStraightUp__R_WLWristStraightUp,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_002_Pokreti_01, FigureVideo.V_002_01]
        },
        {
          description:
            'Gliding WLHand down, 1 beat on WRHand, 1 beat on chest, 1 beat on WLSide, then we throw WLHand and enter into semi-closed position.',
          simpleText: RAISING_THROWING_HANDS_SIMPLE_TEXT,
          startHold: FigureHold.L_WRWristStraightUp__R_WLWristStraightUp,
          endHold: FigureHold.SemiClosed,
          labels: [FigureLabel.MovementStanding, FigureLabel.PeriodFiveToEight],
          videos: [FigureVideo.V_003_06]
        }
      ]
    },
    {
      title: "Woman's hands over head",
      variations: [
        {
          description:
            'Taking WHands over her head. Continue with MHands on WBack.',
          simpleText: 'WHands over WHead',
          startHold: FigureHold.LRAndRLClose,
          endHold: FigureHold.Closed,
          labels: [FigureLabel.MovementMoving, FigureLabel.PeriodOneToFour],
          videos: [FigureVideo.V_003_01]
        }
      ]
    }
  ]
};
