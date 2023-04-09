import React, { FC } from 'react';

import { Checkbox, Space } from '@baifendian/adhere-ui-anthoc';

import { CheckBoxVerticalFormItemProps } from '../../types';

/**
 * CheckBoxVerticalFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CheckBoxVerticalFormItem: FC<CheckBoxVerticalFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <Checkbox.Group
      {...props}
      onChange={(values) => {
        props?.onChange?.(values);
      }}
    >
      <Space direction="vertical">
        {dataSource.map((t) => (
          <Checkbox key={t.value} value={t.value} disabled={t.disabled}>
            {t.label}
          </Checkbox>
        ))}
      </Space>
    </Checkbox.Group>
  );
};

export default CheckBoxVerticalFormItem;
