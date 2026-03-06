import type { ReactNode } from 'react';

import { renderActionsToMobile as inputRenderActionsToMobile } from '../Input/renderActionsToMobile';

export function renderActionsToMobile(id: string): ReactNode {
  return inputRenderActionsToMobile(id);
}
