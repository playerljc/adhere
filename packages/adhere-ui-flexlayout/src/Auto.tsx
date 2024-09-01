import classNames from 'classnames';
import React, { forwardRef, memo, useContext, useMemo } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { FlexContext } from './Context';
import { useGap } from './Hooks';
import { getGridStyle } from './Util';
import { AutoProps, ContextType } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-auto';

/**
 * Auto
 * @param {AutoProps} props
 * @param ref
 * @constructor
 */
const Auto = memo<AutoProps>(
  forwardRef<any, AutoProps>((props, ref) => {
    const {
      children,
      className,
      style,
      autoFixed = true,
      fit = true,
      isUseNormal = false,
      ...attrs
    } = props;

    const { media } = useContext(ConfigProvider.Context);

    const {
      gutter = 0,
      direction,
      children: contextChildren,
    } = useContext<ContextType>(FlexContext);

    const isUseGap = useGap(gutter);

    const classList = useMemo(
      () =>
        classNames(selectorPrefix, className, {
          [`${selectorPrefix}-auto-fixed`]: autoFixed,
          [`${selectorPrefix}-fit`]: isUseNormal ? false : fit,
          [`${selectorPrefix}-gap`]: isUseGap,
          'adhere-ui-flex-layout-normal': isUseNormal,
        }),
      [className, autoFixed, fit, isUseGap],
    );

    const styleList = useMemo(() => {
      const defaultStyle = style ?? {};

      const gridStyle = isUseGap
        ? getGridStyle({ gutter, span: null, children: contextChildren, direction, media })
        : {};

      return {
        ...defaultStyle,
        ...gridStyle,
      };
    }, [style, gutter, isUseGap, direction, media, contextChildren]);

    return (
      <div ref={ref} {...attrs} className={classList} style={styleList}>
        {children}
      </div>
    );
  }),
);

Auto.displayName = 'Auto';

export default Auto;
