import { cloneElement, memo, useState } from 'react';

import type { AsyncTreeEntityValueHOCProps, DisplayNameInternal } from '../types';
import useTreeEntityValueHOC from '../useTreeEntityValueHOC';

const InternalAsyncTreeEntityValueHOC = memo<AsyncTreeEntityValueHOCProps>((props) => {
  const [treeData, setTreeData] = useState<any[]>([]);

  const children = cloneElement(props.children, {
    ...(props?.children?.props ?? {}),
    onDataSourceChange: (_treeData) => {
      setTreeData(_treeData);
    },
  });

  return useTreeEntityValueHOC({ ...props, children, treeData });
});

const AsyncTreeEntityValueHOC = InternalAsyncTreeEntityValueHOC as DisplayNameInternal<
  typeof InternalAsyncTreeEntityValueHOC
>;
AsyncTreeEntityValueHOC.displayName = 'AsyncTreeEntityValueHOC';

export default AsyncTreeEntityValueHOC;
