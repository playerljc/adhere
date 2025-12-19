import classNames from 'classnames';
import React, {
  RefObject,
  forwardRef,
  memo,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';
import type { PropsWithoutRef, RefAttributes } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import Auto from './Auto';
import BackLayout from './BackLayout';
import { FlexContext } from './Context';
import Fixed from './Fixed';
import HorizontalFlexLayout from './HorizontalFlexLayout';
import ScrollLayout, { ScrollLayoutContext, useScrollLayout } from './ScrollLayout';
import SpaceAround from './SpaceAround';
import SpaceBetween from './SpaceBetween';
import * as TRBLC from './TRBLC';
import ToolBarLayout from './ToolBarLayout';
import { getValueWithUnit } from './Util';
import VerticalFlexLayout from './VerticalFlexLayout';
import type { FlexDirection, FlexLayoutComponent, FlexLayoutProps, GutterType } from './types';

export const selectorPrefix = 'adhere-ui-flex-layout';

const { useTheme } = ConfigProvider;

/**
 * 内部 FlexLayout 组件
 *
 * @param {FlexLayoutProps} props - 组件属性
 * @param {React.Ref<HTMLDivElement>} ref - 组件引用
 * @returns {JSX.Element} FlexLayout 组件
 */
const InternalFlexLayout = memo<PropsWithoutRef<FlexLayoutProps> & RefAttributes<HTMLDivElement>>(
  forwardRef<HTMLDivElement, FlexLayoutProps>((props, ref) => {
    const { className, style, direction, gutter = [0, 0], children, ...attrs } = props;

    const { media } = useContext(ConfigProvider.Context);

    const innerRef = useRef<HTMLDivElement | null>(null);

    useTheme<HTMLDivElement>({
      elRef: innerRef as RefObject<HTMLDivElement | null>,
      group: 'normal',
      displayName: 'FlexLayout',
    });

    const targetDirection = useMemo(() => direction ?? 'vertical', [direction]);

    /**
     * 获取垂直栅格样式
     * @returns {React.CSSProperties} 垂直栅格样式
     */
    const getVerticalGridStyle = useCallback((): React.CSSProperties => ({}), []);

    /**
     * 获取水平栅格样式
     * @returns {React.CSSProperties} 水平栅格样式
     */
    const getHorizontalGridStyle = useCallback((): React.CSSProperties => {
      let rowGapOrigin = 0;
      let columnGapOrigin = 0;

      if (Array.isArray(gutter)) {
        if (gutter.length === 1) {
          rowGapOrigin = gutter[0];
          columnGapOrigin = gutter[0];
        } else if (gutter.length === 2) {
          rowGapOrigin = gutter[0];
          columnGapOrigin = gutter[1];
        }
      } else if (typeof gutter === 'number') {
        rowGapOrigin = gutter;
        columnGapOrigin = gutter;
      }

      const columnGapOriginValue = getValueWithUnit(columnGapOrigin / 2, media);

      return {
        rowGap: getValueWithUnit(rowGapOrigin, media),
        marginLeft: `-${columnGapOriginValue}`,
        marginRight: `-${columnGapOriginValue}`,
      };
    }, [gutter, media]);

    /**
     * 获取栅格样式
     * @returns {React.CSSProperties} 栅格样式
     */
    const getGridStyle = useCallback((): React.CSSProperties => {
      const styleMap = new Map<FlexDirection, () => React.CSSProperties>([
        ['horizontal', getHorizontalGridStyle],
        ['vertical', getVerticalGridStyle],
      ]);

      return styleMap.get(targetDirection)?.() ?? {};
    }, [targetDirection, getHorizontalGridStyle, getVerticalGridStyle]);

    // 计算类名
    const classList = useMemo(
      () => classNames(selectorPrefix, className, `${selectorPrefix}-${targetDirection}`),
      [className, targetDirection],
    );

    // 计算样式
    const styleList = useMemo(() => {
      const defaultStyle = style ?? {};
      const gridStyle = getGridStyle();

      return {
        ...defaultStyle,
        ...gridStyle,
      };
    }, [style, getGridStyle]);

    return (
      <FlexContext.Provider
        value={{
          gutter,
          direction: targetDirection,
          children: React.Children.toArray(children),
        }}
      >
        <div
          ref={(node) => {
            innerRef.current = node;
            if (ref) {
              if (typeof ref === 'function') {
                ref(node);
              } else {
                ref.current = node;
              }
            }
          }}
          {...attrs}
          className={classList}
          style={styleList}
        >
          {children}
        </div>
      </FlexContext.Provider>
    );
  }),
);

const FlexLayout = InternalFlexLayout as FlexLayoutComponent;

FlexLayout.displayName = 'FlexLayout';
FlexLayout.selectorPrefix = selectorPrefix;
FlexLayout.Context = FlexContext;
FlexLayout.Fixed = Fixed;
FlexLayout.Auto = Auto;
FlexLayout.HorizontalFlexLayout = HorizontalFlexLayout;
FlexLayout.VerticalFlexLayout = VerticalFlexLayout;
FlexLayout.ToolBarLayout = ToolBarLayout;
FlexLayout.BackLayout = BackLayout;
FlexLayout.ScrollLayout = ScrollLayout;
FlexLayout.SpaceBetween = SpaceBetween;
FlexLayout.SpaceAround = SpaceAround;
FlexLayout.useScrollLayout = useScrollLayout;
FlexLayout.ScrollLayoutContext = ScrollLayoutContext;
FlexLayout.TRBLC = TRBLC;

export default FlexLayout;
