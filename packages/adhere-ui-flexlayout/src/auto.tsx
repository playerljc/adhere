import classNames from 'classnames';
import React, { FC, memo, useContext, useMemo } from 'react';

import { FlexContext } from './context';
import { useGap, useGrid } from './hooks';
import { AutoProps, ContextType } from './types';
import { getGridStyle } from './util';

const selectorPrefix = 'adhere-ui-flexlayout-auto';

/**
 * Auto
 * @param {AutoProps} props
 * @constructor
 */
const Auto: FC<AutoProps> = (props) => {
  const { children, className = '', style = {}, autoFixed = true, fit = true, ...attrs } = props;

  const { gutter = 0, direction, children: contextChildren } = useContext<ContextType>(FlexContext);

  const isUseGrid = useGrid(props);

  const isUseGap = useGap(gutter);

  const classList = useMemo(
    () =>
      classNames(selectorPrefix, className, {
        [`${selectorPrefix}-autoFixed`]: autoFixed,
        [`${selectorPrefix}-fit`]: fit,
        [`${selectorPrefix}-gap`]: isUseGap,
      }),
    [className, autoFixed, fit],
  );

  const styleList = useMemo(() => {
    const defaultStyle = style || {};

    const gridStyle = isUseGrid
      ? getGridStyle({ gutter, span: null, children: contextChildren, direction })
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

export default memo(Auto);
