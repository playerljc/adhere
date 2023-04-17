import classNames from 'classnames';
import React, { FC, memo, useContext, useMemo } from 'react';

import { FlexContext } from './context';
import { useGridStyleHook } from './hooks';
import { AutoProps, ContextType } from './types';

const selectorPrefix = 'adhere-ui-flexlayout-auto';

/**
 * Auto
 * @param {AutoProps} props
 * @constructor
 */
const Auto: FC<AutoProps> = (props) => {
  const { children, className = '', style = {}, autoFixed = true, fit = true, ...attrs } = props;

  const { gutter = 0, direction, children: contextChildren } = useContext<ContextType>(FlexContext);

  const classList = useMemo(
    () =>
      classNames(selectorPrefix, className, {
        [`${selectorPrefix}-autoFixed`]: autoFixed,
        [`${selectorPrefix}-fit`]: fit,
      }),
    [className, autoFixed, fit],
  );

  const gridStyle = useGridStyleHook({
    style,
    gutter,
    children: contextChildren,
    span: null,
    direction,
  });

  return (
    <div className={classList} style={gridStyle} {...attrs}>
      {children}
    </div>
  );
};

export default memo(Auto);
