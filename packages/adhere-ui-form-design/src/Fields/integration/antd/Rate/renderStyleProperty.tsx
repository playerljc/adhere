import type { ReactNode } from 'react';

import type { DesignValueProps } from '../../../../types';
import { renderStyleProperty as inputRenderStyleProperty } from '../Input/renderStyleProperty';

export function renderStyleProperty(props: DesignValueProps): ReactNode {
  return inputRenderStyleProperty(props);
}
