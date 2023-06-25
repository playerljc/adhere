import type { ReactNode } from 'react';
import React from 'react';

import { Type as WidgetPropertyFieldType } from '../../types/WidgetPropertyFieldTypes';
import { GroupType, Type as WidgetType } from '../../types/WidgetTypes';
import LayoutWidget from '../LayoutWidget';
import DesignFlowLayout from './DesignFlowLayout';
import FlowLayout from './FlowLayout';

/**
 * FlowLayoutWidget
 * @description 单行文本框
 */
class FlowLayoutWidget extends LayoutWidget {
  readonly groupType: GroupType = GroupType.LAYOUT;

  readonly type: WidgetType.FLOW_LAYOUT;

  /**
   * defineProperts
   * @description 定义缺省的propertys
   * @protected
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

  renderDesign(): ReactNode {
    const { id, type, groupType, propertys, widgets } = this;
    const props = {
      id,
      type,
      groupType,
      propertys,
      widgets,
    };

    return super.renderDesign(<DesignFlowLayout {...props} />);
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

    return <FlowLayout {...props} />;
  }
}

export default FlowLayoutWidget;
