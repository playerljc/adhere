import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Ellipsis from '@baifendian/adhere-ui-ellipsis';

import { selectorPrefix } from './Expression';
import type { ViewProps } from './types';

const { useTheme } = ConfigProvider;

/**
 * View
 * @param wrapClassName
 * @param wrapStyle
 * @param value
 * @param ellipsisProps
 * @return {JSX.Element}
 * @constructor
 */
const View = memo<ViewProps>(({ wrapClassName, wrapStyle, value, ...ellipsisProps }) => {
  const wrapperRef = useRef<HTMLElement | undefined>();

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'Expression',
  });

  return (
    <div
      //@ts-ignore
      ref={wrapperRef}
      className={classNames(`${selectorPrefix}-view`, wrapClassName ?? '')}
      style={wrapStyle ?? {}}
    >
      <Ellipsis
        {...(ellipsisProps || {})}
        dangerouslySetInnerHTML={{ __html: value ?? '' }}
      ></Ellipsis>
    </div>
  );
});

export default View;
