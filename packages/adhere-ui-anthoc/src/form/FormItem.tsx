import { useMount, useUpdateEffect } from 'ahooks';
import { Form } from 'antd';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import type { FC } from 'react';
import { createPortal } from 'react-dom';

import type { FormItemProps } from '../types';
import { createFactory } from '../util';

const selectorPrefix = 'adhere-ui-anthoc-form-item';

type Errors =
  | {
      status: string;
      errors: string[];
    }
  | undefined
  | null;

/**
 * ErrorWrapper
 * @description 专门处理自定义Error信息
 * @param children
 * @param onErrorChange
 * @param props
 * @constructor
 */
function ErrorWrapper({ children, onErrorChange, ...props }) {
  const { status, errors } = Form.Item.useStatus();

  useUpdateEffect(() => {
    onErrorChange && onErrorChange({ status, errors });
  }, [status, errors]);

  return children({ status, errors, ...props });
}

/**
 * FormItem
 * @description 自定义Form.Item，可以自定义error的错误信息显示位置
 * @param useCustomError
 * @param children
 * @param fit
 * @param getErrorContainer
 * @param {FormItemProps} props
 * @return {React.ReactNode}
 */
const FormItem: FC<FormItemProps> = ({
  useCustomError = false,
  children,
  fit = false,
  getErrorContainer,
  ...props
}): React.ReactNode => {
  const targetValidateTrigger = useMemo(() => {
    // @ts-ignore
    if (children?.type?.displayName === 'NestingFormItem') {
      return '';
    }

    return props?.validateTrigger ?? 'onChange';
  }, [children]);

  const [errorContainer, setErrorContainer] = useState<HTMLElement | null | undefined>();

  const [errors, setErrors] = useState<Errors>();

  const showError = useMemo(() => {
    return (
      useCustomError &&
      !!errorContainer &&
      !!errors &&
      errors.status === 'error' &&
      errors.errors.length > 0
    );
  }, [useCustomError, errorContainer, errors]);

  useMount(() => {
    setErrorContainer(getErrorContainer?.());
  });

  useUpdateEffect(() => {
    setErrorContainer(getErrorContainer?.());
  }, [getErrorContainer]);

  return (
    <>
      <Form.Item
        // noStyle={useCustomError}
        validateFirst
        help={useCustomError ? '' : null}
        {...(props ?? {})}
        className={classNames(props?.className, {
          [`${selectorPrefix}-fit`]: fit,
        })}
        validateTrigger={targetValidateTrigger}
      >
        <ErrorWrapper onErrorChange={setErrors}>
          {({ status, errors, ...rest }) => {
            if (children) {
              return React.cloneElement(children as any, {
                ...((children as any)?.props ?? {}),
                ...(rest ?? {}),
                ref: (children as any).ref,
                status,
                errors,
              });
            }

            return children;
          }}
        </ErrorWrapper>
      </Form.Item>

      {showError &&
        createPortal(
          <span className={`${selectorPrefix}-explain-error`}>{errors?.errors.join('')}</span>,
          errorContainer as HTMLElement,
        )}
    </>
  );
};

const FormItemHOC = createFactory<FormItemProps>(FormItem, {});

FormItemHOC.displayName = 'FormItem';

export default FormItemHOC;
