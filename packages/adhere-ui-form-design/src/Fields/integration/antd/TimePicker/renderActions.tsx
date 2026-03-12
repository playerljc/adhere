import React, { type ReactNode } from 'react';

import { DesignFieldActions } from '../../../../components';
import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';

function Actions({ id }: { id: string }) {
  return (
    <DesignFieldActions
      items={[
        { key: Copy.key, label: Copy.label, el: Copy.render(id) },
        { key: Delete.key, label: Delete.label, el: Delete.render(id) },
      ]}
    />
  );
}

export function renderActions(id: string): ReactNode {
  return <Actions id={id} />;
}
