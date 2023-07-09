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
> = (props) => {
  const {
    value: { checked, type, validationMessage },
    dataSource,
    onChange,
  } = props;

  return (
    <div>
      <Space.Group direction="vertical">
        <FlexLayout direction="horizontal">
          <Space.Group direction="horizontal" size={5}>
            <Fixed style={{ alignItems: 'center' }} fit>
              <Switch
                checked={checked}
                onChange={(e) => {
                  if (onChange) {
                    onChange({
                      checked: e.target.checked,
                      type,
                      validationMessage,
                    });
                  }
                }}
              />
            </Fixed>

            <Auto>
              <Select
                value={type!}
                onChange={(_type) => {
                  if (onChange) {
                    onChange({
                      checked,
                      type: _type,
                      validationMessage,
                    });
                  }
                }}
              >
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
          <Input
            placeholder="自定义提示"
            value={validationMessage}
            onChange={(e) => {
              if (onChange) {
                onChange({
                  checked,
                  type,
                  validationMessage: e.target.value.trim(),
                });
              }
            }}
          />
        </div>
      </Space.Group>
    </div>
  );
};

export default InputValidationTypeComponent;
