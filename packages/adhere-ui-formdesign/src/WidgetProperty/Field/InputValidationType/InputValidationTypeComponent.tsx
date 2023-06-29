import { Checkbox, Input, Select } from 'antd';
import React from 'react';
import type { FC } from 'react';

import {
  InputValidationTypeWidgetPropertyFieldProps,
  WidgetPropertyFieldProps,
} from '../../../types/WidgetPropertyFieldTypes';

/**
 * InputValidationTypeComponent
 * @param props
 * @constructor
 */
const InputValidationTypeComponent: FC<
  WidgetPropertyFieldProps<
    InputValidationTypeWidgetPropertyFieldProps,
    {
      type: string;
      validationMessage?: string;
    }
  >
> = ({ props }) => {
  const {
    value: { checked, type, validationMessage },
    dataSource,
  } = props;

  return (
    <div>
      <div>
        <Checkbox checked={checked} />
      </div>

      <div>
        <div>
          <Select value={type}>
            {dataSource.map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
        </div>

        <div>
          <Input placeholder="自定义提示" value={validationMessage} />
        </div>
      </div>
    </div>
  );
};

export default InputValidationTypeComponent;
