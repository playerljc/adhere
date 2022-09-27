import classNames from 'classnames';
import React, {
  ForwardRefRenderFunction,
  createContext,
  forwardRef,
  memo,
  useContext,
} from 'react';

import { ScrollLayoutContextType, ScrollLayoutProps } from './types';

const selectorPrefix = 'adhere-ui-flexlayout-scrolllayout';

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
 * @param wrapRef
 * @return {JSX.Element}
 * @constructor
 */
const ScrollLayout: ForwardRefRenderFunction<HTMLDivElement, ScrollLayoutProps> = (
  props,
  wrapRef,
) => {
  const { children, className, style, scrollY } = props;

  return (
    <ScrollLayoutContext.Provider
      value={{
        getEl: () => wrapRef?.['current'],
      }}
    >
      <div
        ref={wrapRef}
        className={classNames(selectorPrefix, className || '')}
        style={{ overflowY: scrollY ? 'auto' : 'hidden', ...(style || {}) }}
      >
        {children}
      </div>
    </ScrollLayoutContext.Provider>
  );
};

export default memo(forwardRef<HTMLDivElement, ScrollLayoutProps>(ScrollLayout));
