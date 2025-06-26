import classNames from 'classnames';
import React, { MutableRefObject, createContext, memo, useContext, useRef } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { ScrollLayoutContextType, ScrollLayoutProps } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-scroll-layout';

const { useTheme } = ConfigProvider;

/**
 * ScrollLayoutContext
 */
export const ScrollLayoutContext = createContext<ScrollLayoutContextType>({
  getEl: () => document.body,
});

/**
 * useScrollLayout
 */
export const useScrollLayout = () => {
  const result = useContext(ScrollLayoutContext);

  return { ...result };
};

/**
 * ScrollLayout
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const ScrollLayout = memo<ScrollLayoutProps>((props) => {
  const { children, className, style, scrollY, ...attrs } = props;

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'FlexLayout',
  });

  return (
    <ScrollLayoutContext.Provider
      value={{
        getEl: () => wrapperRef?.['current'],
      }}
    >
      <div
        ref={wrapperRef}
        {...attrs}
        className={classNames(selectorPrefix, className ?? '')}
        style={{ overflowY: scrollY ? 'auto' : 'hidden', ...(style ?? {}) }}
      >
        {children}
      </div>
    </ScrollLayoutContext.Provider>
  );
});

ScrollLayout.displayName = 'ScrollLayout';

export default ScrollLayout;
