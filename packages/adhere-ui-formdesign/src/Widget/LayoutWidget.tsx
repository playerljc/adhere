import classNames from 'classnames';
import React, { CSSProperties, ReactNode } from 'react';

import { selectorPrefix } from '../FormDesign/FormDesign';
import WidgetProperty from '../WidgetProperty/WidgetProperty';
import { GroupType, ILayoutWidget, Type } from '../types/WidgetTypes';
import { getPropertyValueByName, transformInlineCSSToCSSProperties } from '../util';
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
   * @param {WidgetProperty[]} properties 所有属性
   * @param {Widget[]} widgets 子容器
   */
  constructor(
    id: string,
    groupType: GroupType,
    type: Type,
    properties: WidgetProperty[],
    widgets: Array<Widget | LayoutWidget>,
  ) {
    super(id, groupType, type, properties);

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
    const { id, groupType, type, properties, widgets } = this;
    const props = {
      id,
      groupType,
      type,
      properties,
      widgets,
    };

    return <DNDLayoutWidget {...props}>{children}</DNDLayoutWidget>;
  }

  /**
   * render
   * @description 处理className、style
   * @param {ReactNode} children
   * @return {ReactNode}
   */
  render(children: ReactNode): ReactNode {
    const { properties } = this;

    // 处理className
    const className = getPropertyValueByName(properties, 'className');

    // 处理style
    const style = transformInlineCSSToCSSProperties(
      getPropertyValueByName(properties, 'style') ?? {},
    ) as CSSProperties;

    return (
      <div
        className={classNames(`${selectorPrefix}-layout-widget`, ...(className || []))}
        style={style ?? {}}
      >
        {children}
      </div>
    );
  }
}

export default LayoutWidget;
