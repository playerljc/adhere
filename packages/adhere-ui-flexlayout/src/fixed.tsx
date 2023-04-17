import classNames from 'classnames';
import React, { FC, memo, useContext, useMemo } from 'react';

import { FlexContext } from './context';
import { useGap, useGrid } from './hooks';
import { ContextType, FixedProps } from './types';
import { getGridStyle } from './util';

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

  const isUseGrid = useGrid(props);

  const isUseGap = useGap(gutter);

  const classList = useMemo(
    () =>
      classNames(selectorPrefix, className, {
        [`${selectorPrefix}-fit`]: fit,
        [`${selectorPrefix}-col-${props.span}`]: isUseGrid,
        [`${selectorPrefix}-gap`]: isUseGap,
      }),
    [className, props.span, fit],
  );

  const styleList = useMemo(() => {
    const defaultStyle = style || {};

    const gridStyle = isUseGrid
      ? getGridStyle({ gutter, span, children: contextChildren, direction })
      : {};

    return {
      ...defaultStyle,
      ...gridStyle,
    };
  }, [style, gutter]);

  return (
    <div className={classList} style={styleList} {...attrs}>
      {children}
    </div>
  );
};

export default memo(Fixed);
