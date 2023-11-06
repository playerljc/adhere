import React, { memo, useEffect, useState } from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';

import type { SuspenseAsyncProps } from '../types';

/**
 * SuspenseAsync
 * @param props
 * @constructor
 */
const SuspenseAsync = memo<SuspenseAsyncProps>((props) => {
  const { data, renderEmpty, isEmpty, emptyComponent, children } = props;

  const [dataSource, setDataSource] = useState<any[]>([]);

  useEffect(() => {
    setDataSource(dataSource || []);
  }, [data]);

  return (
    <Suspense.ASync
      {...props}
      isEmpty={() => (isEmpty ? isEmpty?.(dataSource) : dataSource.length === 0)}
      renderEmpty={renderEmpty ? renderEmpty(dataSource) : emptyComponent}
    >
      {children}
    </Suspense.ASync>
  );
});

export default SuspenseAsync;
