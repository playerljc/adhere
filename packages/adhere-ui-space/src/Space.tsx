import classNames from 'classnames';
import React, { CSSProperties, memo, useContext, useMemo } from 'react';

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
  const {
    className = '',
    style = {},
    direction = 'horizontal',
    size = 40,
    horizontalFit = false,
  } = props;

  const { media } = useContext(ConfigProvider.Context);

  const value = useMemo(() => getValue(media, size), [media, size]);

  const targetStyle = useMemo<CSSProperties>(() => {
    if (direction === 'horizontal') {
      const styles: CSSProperties = {
        display: 'inline-block',
        marginRight: `${value}`,
      };

      if (horizontalFit) {
        styles.height = '100%';
      }

      return styles;
    }

    return {
      width: '100%',
      marginTop: `${value}`,
    };
  }, [direction, size]);

  return (
    <div
      className={classNames(selectorPrefix, className ?? '')}
      style={{ ...targetStyle, ...(style ?? {}) }}
    />
  );
});

const Space = InternalSpace as SpaceComponent;

Space.displayName = 'Space';

Space.Group = SpaceGroup;

export default Space;
