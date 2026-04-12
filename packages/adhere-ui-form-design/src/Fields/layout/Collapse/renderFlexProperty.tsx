import React, { type ReactNode } from 'react';

import type { DesignValueProps } from '../../../types';
import { FlexProperty } from '../TableGridLayout/renderFlexProperty';

/**
 * renderFlexProperty
 * @param props
 */
export function renderFlexProperty(props: DesignValueProps): ReactNode {
  return <FlexProperty {...props} />;
}
