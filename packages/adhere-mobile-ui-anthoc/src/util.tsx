import React from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

const { useScrollLayout } = FlexLayout;

/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @return {function(*)}
 */
export function createFactory(Component, defaultProps): any {
  function fn(_props) {
    const { getEl } = useScrollLayout();

    const props = { ...defaultProps, ..._props };

    if (!('getPopupContainer' in props)) {
      props.getPopupContainer = (el) => {
        return getEl?.() || el?.parentElement || document.body;
      };
    }

    const { children, ...reset } = props;

    return <Component {...reset}>{children}</Component>;
  }

  Object.assign(fn, Component);

  fn.defaultProps = defaultProps;

  return fn;
}
