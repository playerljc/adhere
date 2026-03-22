import React, { type ReactNode } from 'react';

import type { DesignValueProps } from '../../../types';
import { FlexProperty } from '../TableGridLayout/renderFlexProperty';

/**
 * renderFlexProperty
 * @description 我觉得直接写代码就行，不需要那么多的可视化设置
 * @param props
 */
export function renderFlexProperty(props: DesignValueProps): ReactNode {
  return <FlexProperty {...props} />;
}
