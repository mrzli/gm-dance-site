import { FIGURE_BY_TYPE_GROUP_BASIC_FIGURES } from './groups/basic-figures';
import { FIGURE_BY_TYPE_GROUP_TURNS } from './groups/turns';
import { FIGURE_BY_TYPE_SENSUAL } from './groups/sensual';
import { FIGURE_BY_TYPE_OTHER } from './groups/other';
import { FigureByTypeSectionGroupData } from '../../types/domain/figure-by-type/figure-by-type-section-group-data';

export const FIGURE_BY_TYPE_DATA: readonly FigureByTypeSectionGroupData[] = [
  FIGURE_BY_TYPE_GROUP_BASIC_FIGURES,
  FIGURE_BY_TYPE_GROUP_TURNS,
  FIGURE_BY_TYPE_SENSUAL,
  FIGURE_BY_TYPE_OTHER
];
