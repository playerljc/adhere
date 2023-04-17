import classNames from 'classnames';
import React, { FC, memo, useContext, useMemo } from 'react';

import { FlexContext } from './context';
import { useGridStyleHook } from './hooks';
import { ContextType, FixedProps } from './types';

const selectorPrefix = 'adhere-ui-flexlayout-fixed';

export const gridCount = 24;

/**
 * Fixed
 * @param {FixedProps} props
 * @constructor
 */
const Fixed: FC<FixedProps> = (props) => {
  const { className, children, style, fit, span, ...attrs } = props;

  const { gutter = 0, direction, children: contextChildren } = useContext<ContextType>(FlexContext);

  const classList = useMemo(
    () =>
      classNames(selectorPrefix, className, {
        [`${selectorPrefix}-fit`]: fit,
        [`${selectorPrefix}-col-${props.span}`]:
          'span' in props &&
          typeof props.span === 'number' &&
          props.span >= 0 &&
          props.span <= gridCount,
      }),
    [className, props.span, fit],
  );

  const gridStyle = useGridStyleHook({ style, gutter, span, children: contextChildren, direction });

  return (
    <div className={classList} style={gridStyle} {...attrs}>
      {children}
    </div>
  );
};

export default memo(Fixed);
