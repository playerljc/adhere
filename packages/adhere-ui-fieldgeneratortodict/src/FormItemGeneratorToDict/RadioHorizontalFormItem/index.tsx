import React, { FC } from 'react';

import { Radio } from '@baifendian/adhere-ui-anthoc';

import { RadioHorizontalFormItemProps } from '../../types';

/**
 * RadioHorizontalFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const RadioHorizontalFormItem: FC<RadioHorizontalFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <Radio.Group
      options={dataSource}
      {...props}
      onChange={(e) => {
        props?.onChange?.(e.target.value);
      }}
    />
  );
};

export default RadioHorizontalFormItem;
