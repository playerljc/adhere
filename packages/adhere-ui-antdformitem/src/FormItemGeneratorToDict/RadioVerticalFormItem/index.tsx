import React, { FC } from 'react';

import { Radio, Space } from '../../AntFormItemNormalize';
import { RadioVerticalFormItemProps } from '../../types';

/**
 * RadioVerticalFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const RadioVerticalFormItem: FC<RadioVerticalFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <Radio.Group
      {...props}
      onChange={(e) => {
        props?.onChange?.(e.target.value);
      }}
    >
      <Space direction="vertical">
        {dataSource.map((t) => (
          <Radio key={t.value} value={t.value} disabled={t.disabled}>
            {t.label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default RadioVerticalFormItem;
