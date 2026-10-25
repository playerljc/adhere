import { cloneElement, isValidElement, memo, useState } from 'react';
import type { ReactElement } from 'react';

import type { AsyncTreeEntityValueHOCProps, DisplayNameInternal } from '../types';
import useTreeEntityValueHOC from '../useTreeEntityValueHOC';

const InternalAsyncTreeEntityValueHOC = memo<AsyncTreeEntityValueHOCProps>((props) => {
  const [treeData, setTreeData] = useState<any[]>([]);

  const children = isValidElement(props.children)
    ? cloneElement(props.children as ReactElement<any>, {
        ...(props?.children?.props ?? {}),
        onDataSourceChange: (_treeData) => {
          props?.children?.props?.onDataSourceChange?.(_treeData);
          setTreeData(_treeData);
        },
      })
    : props.children;

  return useTreeEntityValueHOC({ ...props, children, treeData });
});

const AsyncTreeEntityValueHOC = InternalAsyncTreeEntityValueHOC as DisplayNameInternal<
  typeof InternalAsyncTreeEntityValueHOC
>;

export default AsyncTreeEntityValueHOC;
