import classNames from 'classnames';
import React, { createContext, memo, useContext, useRef } from 'react';

import { ScrollLayoutContextType, ScrollLayoutProps } from './types';

const selectorPrefix = 'adhere-ui-flex-layout-scroll-layout';

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

  const wrapRef = useRef<HTMLDivElement | null>(null);

  return (
    <ScrollLayoutContext.Provider
      value={{
        getEl: () => wrapRef?.['current'],
      }}
    >
      <div
        ref={wrapRef}
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