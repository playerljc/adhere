import { ComponentProps } from './CommonTypes';
import { DLayoutWidget, DWidget } from './WidgetTypes';

export interface DesignAreaViewProps extends ComponentProps {
  dataSource: Array<DWidget | DLayoutWidget>;
}
