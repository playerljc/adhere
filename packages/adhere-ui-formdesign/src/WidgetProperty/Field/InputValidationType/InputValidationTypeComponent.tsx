import { Input, Select, Switch } from 'antd';
import React from 'react';
import type { FC } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Space from '@baifendian/adhere-ui-space';

import {
  InputValidationTypeWidgetPropertyFieldProps,
  WidgetPropertyFieldProps,
} from '../../../types/WidgetPropertyFieldTypes';

const { Fixed, Auto } = FlexLayout;

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
      <Space.Group direction="vertical">
        <FlexLayout direction="horizontal">
          <Space.Group direction="horizontal" size={5}>
            <Fixed style={{ alignItems: 'center' }} fit>
              <Switch checked={checked} />
            </Fixed>

            <Auto>
              <Select value={type!}>
                {dataSource.map(({ label, value }) => (
                  <Select.Option key={value} value={value}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </Auto>
          </Space.Group>
        </FlexLayout>

        <div>
          <Input placeholder="自定义提示" value={validationMessage} />
        </div>
      </Space.Group>
    </div>
  );
};

export default InputValidationTypeComponent;
