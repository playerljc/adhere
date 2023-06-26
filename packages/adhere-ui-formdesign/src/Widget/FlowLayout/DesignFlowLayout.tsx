import type { FC } from 'react';
import React, { memo, useMemo } from 'react';

import { selectorPrefix } from '../../FormDesign/FormDesign';
import { FlowLayoutProps } from '../../types/FlowLayoutTypes';
import FlowLayoutItem from './FlowLayoutItem';

const selectorSuffix = '-widget-flow-layout-dnd';

/**
 * DesignFlowLayout
 * @description DesignFlowLayout
 * @constructor
 * @param props
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

  return <div className={`${selectorPrefix}${selectorSuffix}`}>{children}</div>;
};

export default memo(DesignFlowLayout);
