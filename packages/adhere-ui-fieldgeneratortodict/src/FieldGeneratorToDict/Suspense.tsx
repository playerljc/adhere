import React, { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

import type { SuspenseProps } from '../types';

/**
 * Suspense
 * @param props
 * @constructor
 */
const Suspense: FC<SuspenseProps> = (props) => {
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
};

export default memo(Suspense);
