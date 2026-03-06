import React, { type ReactNode } from 'react';

import { renderActions } from './renderActions';

export function renderActionsToMobile(id: string): ReactNode {
  return renderActions(id);
}
