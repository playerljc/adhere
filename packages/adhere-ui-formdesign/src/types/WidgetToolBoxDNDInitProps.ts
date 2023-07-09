import { WidgetToolBoxType } from './WidgetToolBoxTypes';

export type WidgetToolBoxDNDInitProps = Pick<
  WidgetToolBoxType,
  Exclude<keyof WidgetToolBoxType, 'renderInit' | 'renderDragging'>
>;
