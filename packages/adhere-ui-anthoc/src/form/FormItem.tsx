import { Form, FormInstance } from 'antd';
import React, { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import type { FC } from 'react';

import Util from '@baifendian/adhere-util';

import type { FormItemProps } from '../types';

/**
 * FormItem
 * @description 自定义Form.Item，可以自定义error的错误信息显示位置
 * @param {() => HtmlElement | null} getErrorContainer
 * @param children
 * @param {FormItemProps} props
 * @return {React.ReactNode}
 */
const FormItem: FC<FormItemProps> = ({ getErrorContainer, children, ...props }) => {
  // 显示错误信息的元素
  const [errorContainer, setErrorContainer] = useState<HTMLElement | null>();

  useEffect(() => {
    setErrorContainer(getErrorContainer?.());
  }, [getErrorContainer]);

  const targetChildren = useMemo(() => {
    if (!children) return null;

    // 对children注入errorContainer

    if (Util.isFunction(children)) {
      return (form: FormInstance) => {
        const target: ReactNode = (children as Function)(form);

        if (!target) return null;

        return React.cloneElement(target as ReactElement, {
          ...((target as ReactElement)?.props ?? {}),
          errorContainer,
        });
      };
    } else {
      return React.cloneElement(children as ReactElement, {
        ...((children as ReactElement)?.props ?? {}),
        errorContainer,
      });
    }
  }, [children, errorContainer]);

  return (
    <Form.Item {...props} noStyle={!!errorContainer}>
      {targetChildren}
    </Form.Item>
  );
};

export default FormItem;
