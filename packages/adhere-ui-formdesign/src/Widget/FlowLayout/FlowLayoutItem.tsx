import React, { memo } from 'react';
import type { FC } from 'react';

import { selectorPrefix } from '../../FormDesign/FormDesign';
import { FlowLayoutItemProps } from '../../types/FlowLayoutTypes';

export const selectorSuffix = '-widget-flow-layout-item';

const FlowLayoutItem: FC<FlowLayoutItemProps> = ({ children }) => {
  return <div className={`${selectorPrefix}${selectorSuffix}`}>{children}</div>;
};

export default memo(FlowLayoutItem);
