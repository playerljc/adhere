import React from 'react';

import { WidgetToolBoxType } from '../types/WidgetToolBoxTypes';
import WidgetToolBoxDNDDragging from './WidgetToolBoxDNDDragging';
import WidgetToolBoxDNDInit from './WidgetToolBoxDNDInit';

/**
 * WidgetToolBox
 * @description Widget工具箱中的工具
 */
const WidgetToolBox: WidgetToolBoxType = {
  /**
   * renderInit
   * @description ToolBox初始化渲染的公共方法
   */
  renderInit: function (this: WidgetToolBoxType) {
    const { renderInit, renderDragging, ...props } = this;

    return <WidgetToolBoxDNDInit {...props} />;
  },
  /**
   * renderDragging
   * @description ToolBox拖拽过程中渲染的公共方法
   */
  renderDragging: function (this: WidgetToolBoxType) {
    const { renderInit, renderDragging, ...props } = this;

    return <WidgetToolBoxDNDDragging {...props} />;
  },
};

export default WidgetToolBox;
