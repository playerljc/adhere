import React from 'react';

import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Util from '@baifendian/adhere-util';

const { useScrollLayout } = FlexLayout;

/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @param override
 * @return {function(*)}
 */
export function createFactory<P>(
  Component: any,
  defaultProps: Partial<P>,
  override?: (props: Partial<P>) => Partial<P>,
): typeof Component & {
  defaultProps?: Partial<P>;
} {
  const fn = (_props) => {
    const { getEl } = useScrollLayout();

    const props = {
      ...defaultProps,
      ..._props,
      ...(override?.({ ...(_props ?? {}) }) ?? {}),
    };

    if (!('getPopupContainer' in props)) {
      props.getPopupContainer = (el) => {
        return getEl?.() || el?.parentElement || document.body;
      };
    }

    const { children, getErrorContainer, ...rest } = props;

    return <Component {...rest}>{children}</Component>;
  };

  Object.assign(fn, Component);

  fn.defaultProps = defaultProps;

  return fn;
}

/**
 * @typedef {ConfigProviderProps['media]} Media
 */
/**
 * getValue
 * @param {Media} media
 * @param {number} size
 * @return {string}
 */
export function getValue(
  media: ConfigProviderProps['media'],
  size: number | string,
): number | string {
  if (Util.isNumber(size)) {
    if (media?.isUseMedia) {
      return Util.pxToRem(size as number, media?.designWidth as number);
    }

    return size;
  }

  return size;
}
