import classNames from 'classnames';
import React, { forwardRef, memo, useCallback, useContext, useMemo } from 'react';
import type { PropsWithoutRef, RefAttributes } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import Auto from './Auto';
import BackLayout from './BackLayout';
import { FlexContext } from './Context';
import Fixed from './Fixed';
import HorizontalFlexLayout from './HorizontalFlexLayout';
import ScrollLayout, { ScrollLayoutContext, useScrollLayout } from './ScrollLayout';
import * as TRBLC from './TRBLC';
import ToolBarLayout from './ToolBarLayout';
import { getValueWithUnit } from './Util';
import VerticalFlexLayout from './VerticalFlexLayout';
import type { FlexLayoutComponent, FlexLayoutProps } from './types';

export const selectorPrefix = 'adhere-ui-flex-layout';

/**
 * InternalFlexLayout
 * @param {FlexLayoutProps} props
 * @param ref
 * @constructor
 */
const InternalFlexLayout = memo<PropsWithoutRef<FlexLayoutProps> & RefAttributes<any>>(
  forwardRef<any, FlexLayoutProps>((props, ref) => {
    const { className, style, direction, gutter = [0, 0], children, ...attrs } = props;

    const { media } = useContext(ConfigProvider.Context);

    const targetDirection = useMemo(() => direction ?? 'vertical', [direction]);

    /**
     * getVerticalGridStyle
     */
    const getVerticalGridStyle = useCallback(() => ({}), []);

    /**
     * getHorizontalGridStyle
     */
    const getHorizontalGridStyle = useCallback(() => {
      let rowGapOrigin: number = 0;
      let columnGapOrigin: number = 0;

      if (Array.isArray(gutter)) {
        if (gutter.length === 1) {
          rowGapOrigin = gutter[0];
          columnGapOrigin = gutter[0];
        } else if (gutter.length === 2) {
          rowGapOrigin = gutter[0];
          columnGapOrigin = gutter[1];
        }
      } else {
        rowGapOrigin = gutter as number;
        columnGapOrigin = gutter as number;
      }

      const columnGapOriginValue = getValueWithUnit(columnGapOrigin / 2, media);

      return {
        rowGap: getValueWithUnit(rowGapOrigin, media),
        marginLeft: `-${columnGapOriginValue}`,
        marginRight: `-${columnGapOriginValue}`,
      };
    }, [gutter, media]);

    /**
     * getGridStyle
     */
    const getGridStyle = useCallback(() => {
      const map = new Map([
        ['horizontal', getHorizontalGridStyle],
        ['vertical', getVerticalGridStyle],
      ]);

      return map.get(targetDirection)?.();
    }, [targetDirection, getHorizontalGridStyle, getVerticalGridStyle]);

    // class
    const classList = useMemo(
      () => classNames(selectorPrefix, className, `${selectorPrefix}-${targetDirection}`),
      [className, targetDirection],
    );

    // style
    const styleList = useMemo(() => {
      const defaultStyle = style ?? {};

      // 栅格的style
      const gridStyle = getGridStyle(); // 'gutter' in props ? getGridStyle() : {};

      return {
        ...defaultStyle,
        ...gridStyle,
      };
    }, [style, gutter, getGridStyle]);

    return (
      <FlexContext.Provider
        value={{
          gutter,
          direction: targetDirection,
          children,
        }}
      >
        <div ref={ref} {...attrs} className={classList} style={styleList}>
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
FlexLayout.useScrollLayout = useScrollLayout;
FlexLayout.ScrollLayoutContext = ScrollLayoutContext;
FlexLayout.TRBLC = TRBLC;

export default FlexLayout;
