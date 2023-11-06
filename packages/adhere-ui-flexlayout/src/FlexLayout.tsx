import classNames from 'classnames';
import React, { forwardRef, memo, useMemo } from 'react';
import type { PropsWithoutRef, RefAttributes } from 'react';

import Auto from './Auto';
import BackLayout from './BackLayout';
import { FlexContext } from './Context';
import Fixed from './Fixed';
import HorizontalFlexLayout from './HorizontalFlexLayout';
import ScrollLayout, { ScrollLayoutContext, useScrollLayout } from './ScrollLayout';
import * as TRBLC from './TRBLC';
import ToolBarLayout from './ToolBarLayout';
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
    const {
      className = '',
      style = {},
      direction = 'vertical',
      gutter,
      children,
      ...attrs
    } = props;

    /**
     * getVerticalGridStyle
     */
    const getVerticalGridStyle = () => ({});

    /**
     * getHorizontalGridStyle
     */
    const getHorizontalGridStyle = () => {
      let rowGapOrigin;
      let columnGapOrigin;

      if (Array.isArray(gutter)) {
        if (gutter.length === 1) {
          rowGapOrigin = gutter[0];
          columnGapOrigin = gutter[0];
        } else if (gutter.length === 2) {
          rowGapOrigin = gutter[0];
          columnGapOrigin = gutter[1];
        }
      } else {
        rowGapOrigin = gutter;
        columnGapOrigin = gutter;
      }

      const columnGapOriginPixel = `${columnGapOrigin / 2}px`;

      return {
        rowGap: `${rowGapOrigin}px`,
        marginLeft: `-${columnGapOriginPixel}`,
        marginRight: `-${columnGapOriginPixel}`,
      };
    };

    /**
     * getGridStyle
     */
    const getGridStyle = () => {
      const map = new Map([
        ['horizontal', getHorizontalGridStyle],
        ['vertical', getVerticalGridStyle],
      ]);

      return map.get(direction)?.();
    };

    // class
    const classList = useMemo(
      () => classNames(selectorPrefix, className, `${selectorPrefix}-${direction}`),
      [className, direction],
    );

    // style
    const styleList = useMemo(() => {
      const defaultStyle = style ?? {};

      // 栅格的style
      const gridStyle = 'gutter' in props ? getGridStyle() : {};

      return {
        ...defaultStyle,
        ...gridStyle,
      };
    }, [style, gutter]);

    return (
      <FlexContext.Provider
        value={{
          gutter,
          direction,
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

// forwardRef<any, FlexLayoutProps>(FlexLayout)
export default FlexLayout;
