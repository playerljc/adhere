import { Form } from 'antd';
import classNames from 'classnames';
import React, { ReactNode, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import type { FC } from 'react';

import type { FormItemProps } from '../types';

const selectorPrefix = 'adhere-ui-anthoc-form-item';

/**
 * ErrorWrapper
 * @description 专门处理自定义Error信息
 * @param children
 * @param props
 * @constructor
 */
function ErrorWrapper({ children, ...props }) {
  const { status, errors } = Form.Item.useStatus();

  return children({ status, errors, ...props });
}

/**
 * FormItem
 * @description 自定义Form.Item，可以自定义error的错误信息显示位置
 * @param useCustomError
 * @param children
 * @param fit
 * @param {FormItemProps} props
 * @return {React.ReactNode}
 */
const FormItem: FC<FormItemProps> = ({
  useCustomError = false,
  children,
  fit = false,
  ...props
}) => {
  const targetValidateTrigger = useMemo(() => {
    // @ts-ignore
    if (children?.type?.displayName === 'NestingFormItem') {
      return '';
    }

    return 'onChange';
  }, [children]);

  return (
    <Form.Item
      noStyle={useCustomError}
      validateTrigger={targetValidateTrigger}
      validateFirst
      {...(props ?? {})}
      className={classNames(props?.className, {
        [`${selectorPrefix}-fit`]: fit,
      })}
    >
      <ErrorWrapper>
        {({ status, errors, ...rest }) => {
          if (children) {
            return React.cloneElement(children as any, {
              ...((children as any)?.props ?? {}),
              ...(rest ?? {}),
              status,
              errors,
            });
          }

          return children;
        }}
      </ErrorWrapper>
    </Form.Item>
  );
};

export default FormItem;
