import { padNonNegativeInteger } from '../../../utils/generic';

export function getSectionGroupTitle(
  groupIndex: number,
  title: string
): string {
  return `${padNonNegativeInteger(groupIndex + 1, 2)} - ${title}`;
}

export function getSectionTitle(
  groupIndex: number,
  sectionIndex: number,
  title: string
): string {
  const groupString = padNonNegativeInteger(groupIndex + 1, 2);
  const sectionString = padNonNegativeInteger(sectionIndex + 1, 2);

  return `${groupString}.${sectionString} - ${title}`;
}
