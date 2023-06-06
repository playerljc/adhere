import classNames from 'classnames';
import React, { ForwardRefRenderFunction, forwardRef, memo, useContext, useMemo } from 'react';

import { FlexContext } from './context';
import { useGap } from './hooks';
import { AutoProps, ContextType } from './types';
import { getGridStyle } from './util';

const selectorPrefix = 'adhere-ui-flexlayout-auto';

/**
 * Auto
 * @param {AutoProps} props
 * @param ref
 * @constructor
 */
const Auto: ForwardRefRenderFunction<any, AutoProps> = (props, ref) => {
  const { children, className = '', style = {}, autoFixed = true, fit = true, ...attrs } = props;

  const { gutter = 0, direction, children: contextChildren } = useContext<ContextType>(FlexContext);

  const isUseGap = useGap(gutter);

  const classList = useMemo(
    () =>
      classNames(selectorPrefix, className, {
        [`${selectorPrefix}-auto-fixed`]: autoFixed,
        [`${selectorPrefix}-fit`]: fit,
        [`${selectorPrefix}-gap`]: isUseGap,
      }),
    [className, autoFixed, fit],
  );

  const styleList = useMemo(() => {
    const defaultStyle = style ?? {};

    const gridStyle = isUseGap
      ? getGridStyle({ gutter, span: null, children: contextChildren, direction })
      : {};

    return {
      ...defaultStyle,
      ...gridStyle,
    };
  }, [style, gutter]);

  return (
    <div ref={ref} {...attrs} className={classList} style={styleList}>
      {children}
    </div>
  );
};

export default memo(forwardRef<any, AutoProps>(Auto));
