import React, { FC, Fragment, useMemo } from 'react';

import Space from './Space';
import { flattenChildren } from './flattenChildren';
import type { SpaceGroupProps } from './types';

/**
 * SpaceGroup 组件
 *
 * 用于在多个子元素之间自动添加间距的组件。
 * 会自动处理 Fragment 和空值，并在相邻元素之间插入 Space 组件。
 */
const SpaceGroup: FC<SpaceGroupProps> = ({ children, ...props }) => {
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
            <Space {...props} />
            {node}
          </Fragment>
        );
      })}
    </>
  );
};

SpaceGroup.displayName = 'SpaceGroup';

export default SpaceGroup;
