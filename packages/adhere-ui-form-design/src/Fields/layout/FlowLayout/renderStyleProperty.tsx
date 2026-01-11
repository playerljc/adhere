import React, { type ReactNode } from 'react';

import type { DesignValueProps } from '../../../types';
import { StyleProperty } from '../TableGridLayout/renderStyleProperty';

/**
 * renderStyleProperty
 * @description 我觉得直接写代码就行，不需要那么多的可视化设置
 * @param props
 */
export function renderStyleProperty(props: DesignValueProps): ReactNode {
  return <StyleProperty {...props} />;
}
