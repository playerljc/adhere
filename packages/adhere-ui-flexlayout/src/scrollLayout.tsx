import classNames from 'classnames';
import React, {
  FC,
  createContext,
  forwardRef, // memo,
  useContext,
  useRef,
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
 * @return {JSX.Element}
 * @constructor
 */
const ScrollLayout: FC<ScrollLayoutProps> = (props) => {
  const { children, className, style, scrollY, ...attrs } = props;

  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollLayoutContext.Provider
      value={{
        getEl: () => wrapRef?.['current'],
      }}
    >
      <div
        ref={wrapRef}
        {...attrs}
        className={classNames(selectorPrefix, className)}
        style={{ overflowY: scrollY ? 'auto' : 'hidden', ...(style ?? {}) }}
      >
        {children}
      </div>
    </ScrollLayoutContext.Provider>
  );
};

export default ScrollLayout;
