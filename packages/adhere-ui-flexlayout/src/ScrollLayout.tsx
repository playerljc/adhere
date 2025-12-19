import classNames from 'classnames';
import React, { RefObject, createContext, memo, useContext, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { ScrollLayoutContextType, ScrollLayoutProps } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-scroll-layout';

const { useTheme } = ConfigProvider;

/**
 * ScrollLayout 上下文
 * 提供滚动布局相关的上下文信息
 */
export const ScrollLayoutContext = createContext<ScrollLayoutContextType>({
  getEl: () => null,
});

/**
 * 使用 ScrollLayout Hook
 * 获取滚动布局上下文信息
 *
 * @returns {ScrollLayoutContextType} 滚动布局上下文
 */
export const useScrollLayout = (): ScrollLayoutContextType => {
  const result = useContext(ScrollLayoutContext);
  return { ...result };
};

/**
 * ScrollLayout 组件
 * 提供滚动功能的布局容器
 *
 * @param {ScrollLayoutProps} props - 组件属性
 * @returns {JSX.Element} ScrollLayout 组件
 */
const ScrollLayout = memo<ScrollLayoutProps>((props) => {
  const { children, className, style, scrollY, ...attrs } = props;

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useTheme<HTMLDivElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'FlexLayout',
  });

  return (
    <ScrollLayoutContext.Provider
      value={{
        getEl: () => wrapperRef.current,
      }}
    >
      <div
        ref={wrapperRef}
        {...attrs}
        className={classNames(selectorPrefix, className ?? '')}
        style={{
          overflowY: scrollY ? 'auto' : 'hidden',
          ...(style ?? {}),
        }}
      >
        {children}
      </div>
    </ScrollLayoutContext.Provider>
  );
});

ScrollLayout.displayName = 'ScrollLayout';

export default ScrollLayout;
