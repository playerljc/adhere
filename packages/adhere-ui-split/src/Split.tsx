import classNames from 'classnames';
import React, { CSSProperties, memo, useContext, useMemo } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

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
  const { className = '', style, direction = 'vertical', size = 10, horizontalFit = false } = props;

  const { media } = useContext(ConfigProvider.Context);

  const value = useMemo(() => getValue(media, size), [media, size]);

  const targetStyle = useMemo<CSSProperties>(() => {
    if (direction === 'horizontal') {
      const styles: CSSProperties = {
        display: 'inline-block',
        width: 1,
        margin: `0 ${value}`,
      };

      if (horizontalFit) {
        styles.height = '100%';
      }

      return styles;
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
      style={{ ...targetStyle, ...(style ?? {}) }}
    />
  );
});

const Split = InternalSplit as SplitComponent;

Split.displayName = 'Split';

Split.Group = SplitGroup;

export default Split;
