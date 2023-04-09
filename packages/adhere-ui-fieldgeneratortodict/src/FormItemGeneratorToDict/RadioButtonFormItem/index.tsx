import React, { FC } from 'react';

import { Radio } from '@baifendian/adhere-ui-anthoc';

import { RadioButtonFormItemProps } from '../../types';

/**
 * RadioButtonFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const RadioButtonFormItem: FC<RadioButtonFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <Radio.Group
      options={dataSource}
      optionType="button"
      {...props}
      onChange={(e) => {
        props?.onChange?.(e.target.value);
      }}
    />
  );
};

export default RadioButtonFormItem;
