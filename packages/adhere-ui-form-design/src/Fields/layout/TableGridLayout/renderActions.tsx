import React, { type ReactNode } from 'react';

import { DesignFieldActions } from '../../../components';

// 公共的 Action 只有 克隆、删除
function Actions({ id }: { id: string }) {
  return <DesignFieldActions items={[{}]} />;
}

export function renderActions(id: string): ReactNode {
  return <Actions id={id} />;
}
