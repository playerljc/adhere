import React, { forwardRef, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IScrollLayoutProps } from './types';

const selectorPrefix = 'adhere-ui-flexlayout-scrolllayout';

/**
 * ScrollLayoutContext
 * @type {React.Context<{store: {}}>}
 */
export const ScrollLayoutContext = React.createContext({
  getEl: () => document.body,
});

/**
 * useScrollLayout
 */
export function useScrollLayout() {
  const result = useContext(ScrollLayoutContext);

  return { ...result };
}

/**
 * ScrollLayout
 * @param props
 * @param wrapRef
 * @return {JSX.Element}
 * @constructor
 */
function ScrollLayout(props: IScrollLayoutProps, wrapRef) {
  console.log('wrapRef', wrapRef);

  const ref = useRef(wrapRef);

  return (
    <ScrollLayoutContext.Provider
      value={{
        getEl: () => {
          console.log('wrapRef', ref?.current);
          return ref?.current;
        },
      }}
    >
      <div
        ref={ref}
        className={classNames(selectorPrefix, props.className || '')}
        style={{ overflowY: props.scrollY ? 'auto' : 'hidden', ...(props.style || {}) }}
      >
        {props.children}
      </div>
    </ScrollLayoutContext.Provider>
  );
}

const Wrap = forwardRef(ScrollLayout);

Wrap.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  scrollY: PropTypes.bool.isRequired,
};

Wrap.defaultProps = {
  className: '',
  style: {},
  scrollY: true,
};

export default Wrap;
