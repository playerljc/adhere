import { Form } from 'antd';
import React, { useEffect } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

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

    const { status, errors } = Form.Item.useStatus();

    // 对自动以error显示的处理
    useEffect(() => {
      if (_props.errorContainer && status === 'error' && errors && !!errors?.length) {
        _props.errorContainer.innerHTML = errors[0];
        _props.errorContainer.style.display = '';
      } else if (_props.errorContainer && status === 'success') {
        _props.errorContainer.innerHTML = '';
        _props.errorContainer.style.display = 'none';
      }
    }, [_props.errorContainer, status, errors]);

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
