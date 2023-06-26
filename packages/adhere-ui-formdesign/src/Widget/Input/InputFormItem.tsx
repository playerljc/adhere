import { Form, Input } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import { WidgetProps } from '../../types/WidgetTypes';

/**
 * InputFormItem
 * @description InputFormItem
 * @constructor
 * @param props
 */
const InputFormItem: FC<WidgetProps> = (props) => {
  const { id } = props;

  return (
    <Form.Item>
      <Input value={id} />
    </Form.Item>
  );
};

export default memo(InputFormItem);
