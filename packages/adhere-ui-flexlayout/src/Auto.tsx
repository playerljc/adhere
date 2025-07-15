import classNames from 'classnames';
import React, { forwardRef, memo, useContext, useMemo } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { FlexContext } from './Context';
import { useGap } from './Hooks';
import { getGridStyle } from './Util';
import type { AutoProps, ContextType } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-auto';

/**
 * Auto 组件
 * 自动适应尺寸的布局组件，支持栅格系统
 * 
 * @param {AutoProps} props - 组件属性
 * @param {React.Ref<HTMLDivElement>} ref - 组件引用
 * @returns {JSX.Element} Auto 组件
 */
const Auto = memo<AutoProps>(
  forwardRef<HTMLDivElement, AutoProps>((props, ref) => {
    const {
      children,
      className,
      style,
      autoFixed = true,
      fit = true,
      isUseNormal = false,
      isUseMinFill = false,
      ...attrs
    } = props;

    const { media } = useContext(ConfigProvider.Context);

    const {
      gutter = 0,
      direction,
      children: contextChildren,
    } = useContext<ContextType>(FlexContext);

    const isUseGap = useGap(gutter);

    // 计算是否使用 fit 模式
    const isUseFit = useMemo(() => {
      if (isUseNormal) return false;
      return fit;
    }, [isUseNormal, fit]);

    // 计算类名
    const classList = useMemo(
      () =>
        classNames(selectorPrefix, className, {
          [`${selectorPrefix}-auto-fixed`]: autoFixed,
          [`${selectorPrefix}-fit`]: isUseFit,
          [`${selectorPrefix}-gap`]: isUseGap,
          [`${selectorPrefix}-normal`]: isUseNormal,
          [`${selectorPrefix}-min-fill`]: isUseMinFill,
        }),
      [className, autoFixed, isUseFit, isUseGap, isUseNormal, isUseMinFill],
    );

    // 计算样式
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
