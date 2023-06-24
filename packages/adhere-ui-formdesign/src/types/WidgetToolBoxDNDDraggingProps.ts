import { WidgetToolBoxType } from './WidgetToolBoxTypes';

export type WidgetToolBoxDNDDraggingProps = Pick<
  WidgetToolBoxType,
  Exclude<keyof WidgetToolBoxType, 'renderInit' | 'renderDragging'>
>;
