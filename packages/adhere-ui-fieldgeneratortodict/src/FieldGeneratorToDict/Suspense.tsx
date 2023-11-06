import React, { memo, useEffect, useState } from 'react';
// @ts-ignore
import Suspense from '@baifendian/adhere-ui-suspense';
import type { SuspenseProps } from '../types';

/**
 * Suspense
 * @param props
 * @constructor
 */
const Suspense = memo<SuspenseProps>((props) => {
  const { data, renderEmpty, isEmpty, emptyComponent, children } = props;

  const [dataSource, setDataSource] = useState<any[]>([]);

  useEffect(() => {
    setDataSource(dataSource || []);
  }, [data]);

  return (
    <Suspense.Sync
      {...props}
      isEmpty={() => (isEmpty ? isEmpty?.(dataSource) : dataSource.length === 0)}
      renderEmpty={renderEmpty ? renderEmpty(dataSource) : emptyComponent}
    >
      {children}
    </Suspense.Sync>
  );
});

export default Suspense;
