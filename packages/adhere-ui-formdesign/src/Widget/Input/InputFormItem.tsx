import { Form, Input } from 'antd';
import React, { memo } from 'react';
import type { FC } from 'react';

import { WidgetProps } from '../../types/WidgetTypes';

const InputFormItem: FC<WidgetProps> = ({ id }) => {
  return (
    <Form.Item>
      <Input value={id} />
    </Form.Item>
  );
};

export default memo(InputFormItem);
