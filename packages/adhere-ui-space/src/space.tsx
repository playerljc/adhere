import classNames from 'classnames';
import React, { FC, Fragment, memo, useCallback, useMemo } from 'react';
import * as ReactIs from 'react-is';

import { SpaceFunction, SpaceGroupProps, SpaceProps } from './types';
import { getValue } from './util';

const selectorPrefix = 'adhere-ui-space';

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

  if (React.Children.count(filterChildren) <= 1) return filterChildren;

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

/**
 * Space
 * @param props {SpaceProps}
 * @constructor
 */
const Space: FC<SpaceProps> = (props) => {
  const {
    className = '',
    style = {},
    direction = 'horizontal',
    size = 20,
    isUseMedia = false,
    rootValue = 192,
  } = props;

  const value = useMemo(() => getValue(isUseMedia, rootValue, size), [isUseMedia, rootValue, size]);

  const getStyle = useCallback(() => {
    if (direction === 'horizontal') {
      return {
        display: 'inline-block',
        height: '100%',
        margin: `0 ${value}`,
      };
    }

    return {
      width: '100%',
      margin: `${value} 0`,
    };
  }, [direction, size]);

  return (
    <div
      className={classNames(selectorPrefix, className ?? '')}
      style={{ ...getStyle(), ...(style ?? {}) }}
    />
  );
};

// @ts-ignore
const MemoWrap: SpaceFunction<SpaceProps> = memo(Space);

MemoWrap.Group = SpaceGroup;

export default MemoWrap;
