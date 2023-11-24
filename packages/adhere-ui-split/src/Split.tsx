import classNames from 'classnames';
import React, { memo, useCallback, useMemo } from 'react';

import SplitGroup from './Group';
import { getValue } from './Util';
import type { SplitComponent, SplitProps } from './types';

const selectorPrefix = 'adhere-ui-split';

/**
 * Split
 * @param props
 * @constructor
 */
const InternalSplit = memo<SplitProps>((props) => {
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
});

const Split = InternalSplit as SplitComponent;

Split.displayName = 'Split';

Split.Group = SplitGroup;

export default Split;
