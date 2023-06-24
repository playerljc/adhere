import type { FC } from 'react';
import React, { memo, useContext, useMemo } from 'react';

import { selectorPrefix } from '../../FormDesign/FormDesign';
import DropHelp from '../../Widget/DropHelp';
import { FlowLayoutProps } from '../../types/FlowLayoutTypes';
import { DNDLayoutWidgetContext } from '../DNDLayoutWidget';
import FlowLayoutItem from './FlowLayoutItem';

const selectorSuffix = '-widget-flow-layout-dnd';

/**
 * DesignFlowLayout
 * @description DesignFlowLayout
 * @param props
 * @constructor
 */
const DesignFlowLayout: FC<FlowLayoutProps> = (props) => {
  const { widgets } = props;

  const children = useMemo(
    () =>
      widgets.map((_widget) => (
        <FlowLayoutItem key={_widget.getId()}>{_widget.renderDesign()}</FlowLayoutItem>
      )),
    [widgets],
  );

  const { isOverCurrent } = useContext(DNDLayoutWidgetContext);

  return (
    <div className={`${selectorPrefix}${selectorSuffix}`}>
      {children}
      {isOverCurrent && <DropHelp />}
    </div>
  );
};

export default memo(DesignFlowLayout);
