import { Input, Switch } from 'antd';
import React from 'react';
import type { FC } from 'react';

import Space from '@baifendian/adhere-ui-space';

import {
  RequiredWidgetPropertyFieldProps,
  WidgetPropertyFieldProps,
} from '../../../types/WidgetPropertyFieldTypes';

/**
 * RequiredComponent
 * @param props
 * @constructor
 */
const RequiredComponent: FC<
  WidgetPropertyFieldProps<
    RequiredWidgetPropertyFieldProps,
    { required: boolean; validationMessage: string }
  >
> = ({ props }) => {
  const {
    value: { required, validationMessage },
  } = props;

  return (
    <div>
      <Space.Group direction="vertical">
        <div>
          <Switch checked={required} />
        </div>

        {required && (
          <div>
            <Input placeholder="自定义提示信息" value={validationMessage} />
          </div>
        )}
      </Space.Group>
    </div>
  );
};

export default RequiredComponent;
