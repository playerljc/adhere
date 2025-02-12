import { Form, Input } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import { WidgetProps } from '../../types/WidgetTypes';
import { getDefaultFieldProps, getDefaultFormItemProps, getPropertyValueByName } from '../../util';

const { TextArea } = Input;

/**
 * TextAreaFormItem
 * @description TextAreaFormItem
 * @constructor
 * @param props
 */
const TextAreaFormItem: FC<WidgetProps> = (props) => {
  const { /*id,*/ properties } = props;

  return (
    <Form.Item {...getDefaultFormItemProps(properties)}>
      <TextArea
        // value={id}
        {...getDefaultFieldProps(properties)}
        allowClear={getPropertyValueByName(properties, 'allowClear')}
        showCount={getPropertyValueByName(properties, 'maxLength') >= 0}
        maxLength={getPropertyValueByName(properties, 'maxLength')}
        placeholder={getPropertyValueByName(properties, 'placeholder')}
        autoSize={getPropertyValueByName(properties, 'autoSize') ?? false}
        rows={getPropertyValueByName(properties, 'rows') ?? 3}
      />
    </Form.Item>
  );
};

export default memo(TextAreaFormItem);
