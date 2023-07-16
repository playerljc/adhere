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
> = (props) => {
  const {
    value,
    onChange,
    props: { value: defaultValue },
  } = props;

  const required = value?.required ?? defaultValue?.required;

  const validationMessage = value?.validationMessage ?? defaultValue?.validationMessage;

  return (
    <div>
      <Space.Group direction="vertical">
        <div>
          <Switch
            checked={required}
            onChange={(checked) => {
              if (onChange) {
                onChange({
                  required: checked,
                  validationMessage,
                });
              }
            }}
          />
        </div>

        {required && (
          <div>
            <Input
              placeholder="自定义提示信息"
              value={validationMessage}
              onChange={(e) => {
                if (onChange) {
                  onChange({
                    required,
                    validationMessage: e.target.value.trim(),
                  });
                }
              }}
            />
          </div>
        )}
      </Space.Group>
    </div>
  );
};

export default RequiredComponent;
