/**
 * WidgetComposite
 */
import type { WidgetToolBoxType } from './WidgetToolBoxTypes';
import { ILayoutWidget, IWidget } from './WidgetTypes';
import type { Type } from './WidgetTypes';

export interface WidgetComposite {
  type: Type;
  sort: number;
  toolBox: WidgetToolBoxType;
  widgetClass: IWidget | ILayoutWidget;
}
