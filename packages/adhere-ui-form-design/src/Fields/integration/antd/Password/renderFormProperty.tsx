import type { ReactNode } from 'react';

import type { DesignValueProps } from '../../../../types';
import { renderFormProperty as inputRenderFormProperty } from '../Input/renderFormProperty';

export function renderFormProperty(props: DesignValueProps): ReactNode {
  return inputRenderFormProperty(props);
}
