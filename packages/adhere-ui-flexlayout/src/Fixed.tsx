import classNames from 'classnames';
import React, { forwardRef, memo, useContext, useImperativeHandle, useMemo, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { FlexContext } from './Context';
import { useGap, useGrid, useTrigger } from './Hooks';
import { getGridStyle } from './Util';
import type { ContextType, FixedProps } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-fixed';

/**
 * 栅格系统总列数
 */
export const gridCount = 24;

/**
 * Fixed 组件引用类型
 */
export interface FixedRef {
  /** 获取元素引用 */
  getEl: () => HTMLDivElement | null;
}

/**
 * Fixed 组件
 * 固定尺寸的布局组件，支持栅格系统和折叠功能
 *
 * @param {FixedProps} props - 组件属性
 * @param {React.Ref<FixedRef>} ref - 组件引用
 * @returns {JSX.Element} Fixed 组件
 */
const Fixed = memo<FixedProps>(
  forwardRef<FixedRef, FixedProps>((props, ref) => {
    const {
      className,
      children,
      style,
      fit,
      span,
      trigger,
      collapseDirection = 'L',
      collapsedSize = 80,
      defaultCollapsible = false,
      onCollapse,
      ...attrs
    } = props;

    const { media } = useContext(ConfigProvider.Context);

    const {
      gutter = 0,
      direction,
      children: contextChildren,
    } = useContext<ContextType>(FlexContext);

    const elRef = useRef<HTMLDivElement | null>(null);

    const isUseGrid = useGrid(props);
    const isUseGap = useGap(gutter);

    const { renderTrigger, collapseStyle } = useTrigger({
      trigger,
      collapseDirection,
      collapsedSize,
      defaultCollapsible,
      onCollapse,
      selectorPrefix,
      elRef,
    });

    // 计算类名
    const classList = useMemo(
      () =>
        classNames(selectorPrefix, className ?? '', {
          [`${selectorPrefix}-fit`]: fit,
          [`${selectorPrefix}-col-${span}`]: isUseGrid,
          [`${selectorPrefix}-gap`]: isUseGap,
        }),
      [className, span, fit, isUseGap, isUseGrid],
    );

    // 计算样式
    const styleList = useMemo(() => {
      const defaultStyle = style ?? {};

      const gridStyle = isUseGap
        ? getGridStyle({ gutter, span, children: contextChildren, direction, media })
        : {};

      return {
        ...gridStyle,
        ...(collapseStyle ?? {}),
        ...defaultStyle,
      };
    }, [style, gutter, collapseStyle, isUseGap, direction, media, span, contextChildren]);

    // 暴露组件引用
    useImperativeHandle(ref, () => ({
      getEl: () => elRef.current,
    }));

    return (
      <div ref={elRef} {...attrs} className={classList} style={styleList}>
        {children}
        {renderTrigger()}
      </div>
    );
  }),
);

Fixed.displayName = 'Fixed';

export default Fixed;
