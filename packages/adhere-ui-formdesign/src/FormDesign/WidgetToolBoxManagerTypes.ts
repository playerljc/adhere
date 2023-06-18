/**
 * WidgetComposite
 */
import type Widget from './Widget';
import type { WidgetToolBoxType } from './WidgetToolBoxTypes';
import type { Type } from './WidgetTypes';

export interface WidgetComposite {
  type: Type;
  sort: number;
  toolBox: WidgetToolBoxType;
  widgetClass: Widget;
}
