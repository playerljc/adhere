import React, { FC, Fragment, useMemo } from 'react';
import * as ReactIs from 'react-is';

import Space from './Space';
import type { SpaceGroupProps } from './types';

/**
 * SpaceGroup
 * @param children {ReactNode}
 * @param props {SpaceGroupProps}
 * @constructor
 */
const SpaceGroup: FC<SpaceGroupProps> = ({ children, ...props }) => {
  const filterChildren = useMemo(() => {
    if (Array.isArray(children)) {
      return (children || []).filter((t) => !!t);
    }

    return children;
  }, [children]);

  const childrenFlat = useMemo<any>(() => {
    const flat: any[] = [];

    function loop(_children) {
      React.Children.map(_children, (child) => {
        if (ReactIs.isFragment(child)) {
          loop((child?.props?.children || []).filter((t) => !!t));
        } else {
          flat.push(child);
        }
      });
    }

    loop(filterChildren);

    return flat;
  }, [filterChildren]);

  if (React.Children.count(filterChildren) <= 1) return filterChildren;

  return childrenFlat.map((child, index) => {
    if (index === 0) return child;

    return (
      <Fragment key={index}>
        <Space {...props} />
        {child}
      </Fragment>
    );
  });
};

SpaceGroup.displayName = 'SpaceGroup';

export default SpaceGroup;
