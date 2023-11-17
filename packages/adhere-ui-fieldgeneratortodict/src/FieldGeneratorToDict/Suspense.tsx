import React, { memo } from 'react';

import AdhereSuspense from '@baifendian/adhere-ui-suspense';

import type { SuspenseProps } from '../types';

/**
 * Suspense
 * @param props
 * @constructor
 */
const Suspense = memo<SuspenseProps>((props) => {
  const { data, renderEmpty, isEmpty, emptyComponent, children } = props;

  return (
    <AdhereSuspense.Sync
      {...props}
      isEmpty={() => (isEmpty ? isEmpty?.(data) : data.length === 0)}
      renderEmpty={renderEmpty ? renderEmpty(data) : emptyComponent}
    >
      {children}
    </AdhereSuspense.Sync>
  );
});

export default Suspense;
