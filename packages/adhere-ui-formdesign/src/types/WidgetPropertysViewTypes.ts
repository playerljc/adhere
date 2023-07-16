import Widget from '../Widget';
import LayoutWidget from '../Widget/LayoutWidget';
import { ComponentProps } from './CommonTypes';

export interface WidgetPropertiesViewProps extends ComponentProps {
  widget: Widget | LayoutWidget;
}
