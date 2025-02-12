import { Form, type FormItemProps } from 'antd-mobile';
import React, { useMemo } from 'react';
import type { FC } from 'react';

/**
 * FormItem
 * @return {React.ReactNode}
 */
const FormItem: FC<FormItemProps> = ({ children, ...props }) => {
  const targetValidateTrigger = useMemo(() => {
    // @ts-ignore
    if (children?.type?.displayName === 'NestingFormItem') {
      return '';
    }

    return 'onChange';
  }, [children]);

  return (
    <Form.Item validateTrigger={targetValidateTrigger} {...props}>
      {children}
    </Form.Item>
  );
};

export default FormItem;
