import type { ReactNode } from 'react';
import React from 'react';

import DNDLayoutWidget from '../DNDLayoutWidget';
import LayoutWidget from '../LayoutWidget';
import DesignFlowLayout from './DesignFlowLayout';
import FlowLayout from './FlowLayout';

/**
 * FlowLayoutWidget
 * @description 单行文本框
 */
class FlowLayoutWidget extends LayoutWidget {
  renderDesign(): ReactNode {
    const { id, type, groupType, propertys, widgets } = this;
    const props = {
      id,
      type,
      groupType,
      propertys,
      widgets,
    };

    return (
      <DNDLayoutWidget {...props}>
        <DesignFlowLayout {...props} />
      </DNDLayoutWidget>
    );
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
