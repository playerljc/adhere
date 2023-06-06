import classNames from 'classnames';
import React, { ForwardRefRenderFunction, forwardRef, memo, useMemo } from 'react';

import * as TRBLC from './TRBLC';
import Auto from './auto';
import BackLayout from './backLayout';
import { FlexContext } from './context';
import Fixed from './fixed';
import HorizontalFlexLayout from './horizontalFlexLayout';
import ScrollLayout, { ScrollLayoutContext, useScrollLayout } from './scrollLayout';
import ToolBarLayout from './toolBarLayout';
import type { FlexLayoutFunction, FlexLayoutProps } from './types';
import VerticalFlexLayout from './verticalFlexLayout';

export const selectorPrefix = 'adhere-ui-flexlayout';

/**
 * FlexLayout
 * @param {FlexLayoutProps} props
 * @param ref
 * @constructor
 */
const FlexLayout: ForwardRefRenderFunction<any, FlexLayoutProps> = (props, ref) => {
  const { className = '', style = {}, direction = 'vertical', gutter, children, ...attrs } = props;

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
};

//@ts-ignore
const MemoWrap: FlexLayoutFunction<FlexLayoutProps> = memo(
  forwardRef<any, FlexLayoutProps>(FlexLayout),
);

MemoWrap.selectorPrefix = selectorPrefix;
MemoWrap.Context = FlexContext;
MemoWrap.Fixed = Fixed;
MemoWrap.Auto = Auto;
MemoWrap.HorizontalFlexLayout = HorizontalFlexLayout;
MemoWrap.VerticalFlexLayout = VerticalFlexLayout;
MemoWrap.ToolBarLayout = ToolBarLayout;
MemoWrap.BackLayout = BackLayout;
MemoWrap.ScrollLayout = ScrollLayout;
MemoWrap.useScrollLayout = useScrollLayout;
MemoWrap.ScrollLayoutContext = ScrollLayoutContext;
MemoWrap.TRBLC = TRBLC;

export default MemoWrap;
