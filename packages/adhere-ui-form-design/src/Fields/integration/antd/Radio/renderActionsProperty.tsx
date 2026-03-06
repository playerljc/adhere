import type { ReactNode } from 'react';

import type { DesignValueProps } from '../../../../types';
import { renderActionsProperty as inputRenderActionsProperty } from '../Input/renderActionsProperty';

export function renderActionsProperty(props: DesignValueProps): ReactNode {
  return inputRenderActionsProperty(props);
}
