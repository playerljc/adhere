import type { ReactNode } from 'react';

import { renderActions as inputRenderActions } from '../Input/renderActions';

export function renderActions(id: string): ReactNode {
  return inputRenderActions(id);
}
