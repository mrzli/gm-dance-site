export enum FigureLabel {
  Basic = 'Basic',
  SimplePositionChange = 'SimplePositionChange'
}

export const MAP_FIGURE_LABEL_TO_TEXT = new Map<FigureLabel, string>([
  [FigureLabel.Basic, 'Basic'],
  [FigureLabel.SimplePositionChange, 'Simple Position Change']
]);
