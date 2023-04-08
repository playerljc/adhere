import classNames from 'classnames';
import React, { FC, memo, useMemo } from 'react';

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

const FlexLayout: FC<FlexLayoutProps> = (props) => {
  const { className = '', style = {}, direction = 'vertical', gutter = 0, children } = props;

  const classList = useMemo(
    () => classNames(selectorPrefix, className, `${selectorPrefix}-${direction}`),
    [className, direction],
  );

  const styleList = useMemo(() => {
    const defaultStyle = style || {};

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

    return {
      ...{
        rowGap: `${rowGapOrigin}px`,
        marginLeft: `-${columnGapOrigin / 2}px`,
        marginRight: `-${columnGapOrigin / 2}px`,
      },
      ...defaultStyle,
    };
  }, [style, gutter]);

  return (
    <FlexContext.Provider
      value={{
        gutter,
        direction,
      }}
    >
      <div className={classList} style={styleList}>
        {children}
      </div>
    </FlexContext.Provider>
  );
};

//@ts-ignore
const MemoWrap: FlexLayoutFunction<FlexLayoutProps> = memo(FlexLayout);

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

export default MemoWrap;
