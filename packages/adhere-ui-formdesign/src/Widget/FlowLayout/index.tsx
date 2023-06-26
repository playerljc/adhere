import type { ReactNode } from 'react';
import React from 'react';

import { Type as WidgetPropertyFieldType } from '../../types/WidgetPropertyFieldTypes';
import { GroupType, Type as WidgetType } from '../../types/WidgetTypes';
import LayoutWidget from '../LayoutWidget';
import DesignFlowLayout from './DesignFlowLayout';
import FlowLayout from './FlowLayout';

/**
 * FlowLayoutWidget
 * @description 流布局
 */
class FlowLayoutWidget extends LayoutWidget {
  // Group类型
  readonly groupType: GroupType = GroupType.LAYOUT;

  // LayoutWidget类型
  readonly type: WidgetType.FLOW_LAYOUT;

  /**
   * defineProperts
   * @description 定义缺省的propertys
   * @protected
   * @return {DLayoutWIdget[]}
   */
  protected defineProperts() {
    return this.mergePropertys(super.defineProperts(), [
      {
        key: 'title',
        value: {
          type: WidgetPropertyFieldType.INPUT,
          props: {
            value: '流布局',
          },
        },
      },
    ]);
  }

  /**
   * renderDesign
   * @description 渲染设计视图
   * @return {ReactNode}
   */
  renderDesign(): ReactNode {
    const { id, type, groupType, propertys, widgets } = this;
    const props = {
      id,
      type,
      groupType,
      propertys,
      widgets,
    };

    return super.renderDesign(super.render(<DesignFlowLayout {...props} />));
  }

  render(): ReactNode {
    const { id, type, groupType, propertys, widgets } = this;
    const props = {
      id,
      type,
      groupType,
      propertys,
      widgets,
    };

    return super.render(<FlowLayout {...props} />);
  }
}

export default FlowLayoutWidget;
