import { Form, Input } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import { WidgetProps } from '../../types/WidgetTypes';
import { getDefaultFieldProps, getDefaultFormItemProps, getPropertyValueByName } from '../../util';

/**
 * InputFormItem
 * @description InputFormItem
 * @constructor
 * @param props
 */
const InputFormItem: FC<WidgetProps> = (props) => {
  const { /*id,*/ properties } = props;

  return (
    <Form.Item {...getDefaultFormItemProps(properties)}>
      <Input
        // value={id}
        {...getDefaultFieldProps(properties)}
        type={getPropertyValueByName(properties, 'inputType')}
        allowClear={getPropertyValueByName(properties, 'allowClear')}
        showCount={getPropertyValueByName(properties, 'maxLength') >= 0}
        maxLength={getPropertyValueByName(properties, 'maxLength')}
        placeholder={getPropertyValueByName(properties, 'placeholder')}
      />
    </Form.Item>
  );
};

export default memo(InputFormItem);
