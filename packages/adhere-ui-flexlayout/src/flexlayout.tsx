import classNames from 'classnames';
import React from 'react';

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

const FlexLayout: FlexLayoutFunction<FlexLayoutProps> = (props) => {
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

export default FlexLayout;
