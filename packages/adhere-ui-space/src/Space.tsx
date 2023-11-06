import classNames from 'classnames';
import React, { memo, useCallback, useMemo } from 'react';

import SpaceGroup from './Group';
import type { SpaceComponent, SpaceProps } from './types';
import { getValue } from './util';

const selectorPrefix = 'adhere-ui-space';

/**
 * Space
 * @param props {SpaceProps}
 * @constructor
 */
const InternalSpace = memo<SpaceProps>((props) => {
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
});

const Space = InternalSpace as SpaceComponent;

Space.Group = SpaceGroup;

export default Space;
