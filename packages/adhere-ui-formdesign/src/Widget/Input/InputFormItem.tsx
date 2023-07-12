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
  const { /*id,*/ propertys } = props;

  return (
    <Form.Item {...getDefaultFormItemProps(propertys)}>
      <Input
        // value={id}
        {...getDefaultFieldProps(propertys)}
        type={getPropertyValueByName(propertys, 'inputType')}
        allowClear={getPropertyValueByName(propertys, 'allowClear')}
        showCount={getPropertyValueByName(propertys, 'maxLength') >= 0}
        maxLength={getPropertyValueByName(propertys, 'maxLength')}
        placeholder={getPropertyValueByName(propertys, 'placeholder')}
      />
    </Form.Item>
  );
};

export default memo(InputFormItem);
