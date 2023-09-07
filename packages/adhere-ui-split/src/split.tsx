import classNames from 'classnames';
import React, { FC, Fragment, memo, useCallback, useMemo } from 'react';
import * as ReactIs from 'react-is';

import { SplitFunction, SplitGroupProps, SplitProps } from './types';
import { getValue } from './util';

const selectorPrefix = 'adhere-ui-split';

/**
 * SplitGroup
 * @param children
 * @param props
 * @constructor
 */
const SplitGroup: FC<SplitGroupProps> = ({ children, ...props }) => {
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
        <Split {...props} />
        {child}
      </Fragment>
    );
  });
};

/**
 * Split
 * @param props
 * @constructor
 */
const Split: FC<SplitProps> = (props) => {
  const {
    className = '',
    style,
    direction = 'vertical',
    size = 20,
    isUseMedia = false,
    rootValue = 192,
  } = props;

  const value = useMemo(() => getValue(isUseMedia, rootValue, size), [isUseMedia, rootValue, size]);

  const getStyle = useCallback(() => {
    if (direction === 'horizontal') {
      return {
        display: 'inline-block',
        width: 1,
        height: '100%',
        margin: `0 ${value}`,
      };
    }

    return {
      width: '100%',
      height: 1,
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
const MemoWrap: SplitFunction<SplitProps> = memo(Split);

MemoWrap.Group = SplitGroup;

export default MemoWrap;
