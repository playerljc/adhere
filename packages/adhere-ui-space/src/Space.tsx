import classNames from 'classnames';
import React, { memo, useCallback, useContext, useMemo } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import SpaceGroup from './Group';
import { getValue } from './Util';
import type { SpaceComponent, SpaceProps } from './types';

const selectorPrefix = 'adhere-ui-space';

/**
 * Space
 * @param props {SpaceProps}
 * @constructor
 */
const InternalSpace = memo<SpaceProps>((props) => {
  const { className = '', style = {}, direction = 'horizontal', size = 20 } = props;

  const { media } = useContext(ConfigProvider.Context);

  const value = useMemo(() => getValue(media, size), [media, size]);

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

Space.displayName = 'Space';

Space.Group = SpaceGroup;

export default Space;
