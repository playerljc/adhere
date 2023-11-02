import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

const { useScrollLayout } = FlexLayout;

/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @return {function(*)}
 */
export function createFactory<P>(
  Component: any,
  defaultProps: Partial<P>,
): FC<P> & {
  defaultProps?: Partial<P>;
} & typeof Component /*{ [key in keyof typeof Component]?: T[key] }*/ {
  const fn = (_props) => {
    const { getEl } = useScrollLayout();

    const props = { ...defaultProps, ..._props };

    if (!('getPopupContainer' in props)) {
      props.getPopupContainer = (el) => {
        return getEl?.() || el?.parentElement || document.body;
      };
    }

    const { children, ...rest } = props;

    return <Component {...rest}>{children}</Component>;
  };

  Object.assign(fn, Component);

  fn.defaultProps = defaultProps;

  return fn;
}
