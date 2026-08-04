import React, { FC, Fragment, useMemo } from 'react';

import Split from './Split';
import { flattenChildren } from './flattenChildren';
import type { SplitGroupProps } from './types';

/**
 * SplitGroup组件 - 自动在子元素之间插入分割条
 */
const SplitGroup: FC<SplitGroupProps> = ({ children, ...props }) => {
  const childrenFlat = useMemo(() => flattenChildren(children), [children]);

  if (childrenFlat.length <= 1) {
    return <>{childrenFlat.map(({ node }) => node)}</>;
  }

  return (
    <>
      {childrenFlat.map(({ node, key }, index) => {
        if (index === 0) {
          return <Fragment key={key}>{node}</Fragment>;
        }

        return (
          <Fragment key={key}>
            <Split {...props} />
            {node}
          </Fragment>
        );
      })}
    </>
  );
};

SplitGroup.displayName = 'SplitGroup';

export default SplitGroup;
