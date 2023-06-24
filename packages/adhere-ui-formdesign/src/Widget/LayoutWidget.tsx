import WidgetProperty from '../WidgetProperty/WidgetProperty';
import { GroupType, ILayoutWidget, Type } from '../types/WidgetTypes';
import Widget from './index';

/**
 * LayoutWidget
 * @description 布局的Widget
 */
abstract class LayoutWidget extends Widget implements ILayoutWidget {
  constructor(
    id: string,
    groupType: GroupType,
    type: Type,
    propertys: WidgetProperty[],
    widgets: Array<Widget | LayoutWidget>,
  ) {
    super(id, groupType, type, propertys);

    this.widgets = widgets;
  }

  // 存放widgets
  readonly widgets: Array<Widget | LayoutWidget>;

  getWidgets() {
    return [...this.widgets];
  }
}

export default LayoutWidget;
