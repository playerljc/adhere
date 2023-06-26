import React, { ReactNode } from 'react';

import WidgetProperty from '../WidgetProperty/WidgetProperty';
import { GroupType, ILayoutWidget, Type } from '../types/WidgetTypes';
import DNDLayoutWidget from './DNDLayoutWidget';
import Widget from './index';

/**
 * LayoutWidget
 * @description 布局的Widget
 */
abstract class LayoutWidget extends Widget implements ILayoutWidget {
  /**
   * constructor
   * @param {string} id 唯一标识
   * @param {GroupType} groupType 分组类型
   * @param {WidgetType} type Widget类型
   * @param {WidgetProperty[]} propertys 所有属性
   * @param {Widget[]} widgets 子容器
   */
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

  /**
   * renderDesign
   * @description 包装一层DNDLayoutWidget
   * @param {ReactNode} children
   * @return {ReactNode}
   */
  renderDesign(children: ReactNode): ReactNode {
    const { id, groupType, type, propertys, widgets } = this;
    const props = {
      id,
      groupType,
      type,
      propertys,
      widgets,
    };

    return <DNDLayoutWidget {...props}>{children}</DNDLayoutWidget>;
  }
}

export default LayoutWidget;
