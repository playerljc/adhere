import classNames from 'classnames';
import React, { FC, memo } from 'react';

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
  const { className = '', style = {}, direction = 'vertical', children } = props;

  return (
    <FlexContext.Provider
      value={{
        direction,
      }}
    >
      <div
        className={classNames(selectorPrefix, `${selectorPrefix}-${direction}`, className || '')}
        style={style || {}}
      >
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
