import { FigureByTypeSectionGroupData } from '../../types/domain/figure-by-type/figure-by-type-section-group-data';
import { FIGURE_BY_TYPE_GROUP_BASIC_FIGURES } from './groups/basic-figures';
import { FIGURE_BY_TYPE_GROUP_TURNS } from './groups/turns';
import { FIGURE_BY_TYPE_SENSUAL } from './groups/sensual';
import { FIGURE_BY_TYPE_OTHER } from './groups/other';
import { FIGURE_BY_TYPE_BACK_TURNED_WOMEN } from './groups/back-turned-women';
import { FIGURE_BY_TYPE_NINETY_DEGREES_OR_ALIGNED } from './groups/ninety-degrees-or-aligned';
import { FIGURE_BY_TYPE_BACK_TURNED_MEN } from './groups/back-turned-men';

export const FIGURE_BY_TYPE_DATA: readonly FigureByTypeSectionGroupData[] = [
  FIGURE_BY_TYPE_GROUP_BASIC_FIGURES,
  FIGURE_BY_TYPE_GROUP_TURNS,
  FIGURE_BY_TYPE_SENSUAL,
  FIGURE_BY_TYPE_NINETY_DEGREES_OR_ALIGNED,
  FIGURE_BY_TYPE_BACK_TURNED_WOMEN,
  FIGURE_BY_TYPE_BACK_TURNED_MEN,
  FIGURE_BY_TYPE_OTHER
];
